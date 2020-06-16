const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
    apiUrl: 'https://cd71b97d9ea3.ngrok.io',
  },
  test: {},
  development: {},
  production: {
    apiUrl: 'https://cd71b97d9ea3.ngrok.io',
  },
}

module.exports = merge(config.all, config[config.all.env])
