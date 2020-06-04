import { stringify } from 'query-string'
import merge from 'lodash/merge'
import { apiUrl } from 'config'
import cookie from 'react-cookie'

export const checkStatus = (response) => {
  if (response.ok) {
    return response
  }
  const error = new Error(`${response.status} ${response.statusText}`)
  error.response = response
  throw error
}

export const parseJSON = (response) => response.json()

export const parseSettings = ({
  method = 'get', data, locale, ...otherSettings
} = {}) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': otherSettings['Content-Type'] || 'application/json',
    'Accept-Language': locale,
  }
  if (otherSettings['Content-Type']) {

    console.log(data);
    for (const value of data.values()) {
      console.log('formData', value);
    }
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
  .then(checkStatus)
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
