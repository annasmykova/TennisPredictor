import { stringify } from 'query-string'
import merge from 'lodash/merge'
import { apiUrl } from 'config'
import cookie from 'react-cookie'

export const checkStatus = (response) => {
  return response
}

export const parseJSON = (response) => {
  return response.json()
}

export const parseSettings = ({
  method = 'get', data, locale, ...otherSettings
} = {}) => {
  const headers = {
    // Accept: 'application/json',
    Origin: '*',
    'access-control-allow-origin': '*'
  }
  if (!otherSettings['Content-Type']) {
    headers['Content-Type'] = 'application/json'
  }
  const settings = merge({
    body: data
          ? otherSettings['Content-Type']
            ? data
            : JSON.stringify(data)
          : undefined,
    method,
    headers,
  }, otherSettings)
  return settings
}

export const parseEndpoint = (endpoint, params) => {
  const url = endpoint.indexOf('http') === 0 ? endpoint : apiUrl + endpoint
  const querystring = params ? `?${stringify(params)}` : ''
  return `${url}${querystring}`
}

const api = {}

api.request = (endpoint, { params, ...settings } = {}) => fetch(parseEndpoint(endpoint, params), parseSettings(settings))
  .then(parseJSON);
['delete', 'get'].forEach((method) => {
  api[method] = (endpoint, settings) => api.create().request(endpoint, { method, ...settings })
});
['post', 'put', 'patch'].forEach((method) => {
  api[method] = (endpoint, data, settings) => api.create().request(endpoint, { method, data, ...settings })
})

api.create = (settings = {}) => ({
  settings,

  setToken(token) {
    this.settings.headers = {
      ...this.settings.headers,
      Authorization: `Bearer ${token}`,
    }
  },

  unsetToken() {
    this.settings.headers = {
      ...this.settings.headers,
      Authorization: undefined,
    }
  },

  request(endpoint, settings) {
    if (cookie.load('token')) {
      this.setToken(cookie.load('token'))
    }
    return api.request(endpoint, merge({}, this.settings, settings))
  },

  post(endpoint, data, settings) {
    return this.request(endpoint, { method: 'post', data, ...settings })
  },

  get(endpoint, settings) {
    return this.request(endpoint, { method: 'get', ...settings })
  },

  put(endpoint, data, settings) {
    return this.request(endpoint, { method: 'put', data, ...settings })
  },

  patch(endpoint, data, settings) {
    return this.request(endpoint, { method: 'patch', data, ...settings })
  },

  delete(endpoint, settings) {
    return this.request(endpoint, { method: 'delete', ...settings })
  },
})

export default api
