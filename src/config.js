const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
    apiUrl: 'https://f6d90c435e5b.ngrok.io',
  },
  test: {},
  development: {},
  production: {
    apiUrl: 'https://f6d90c435e5b.ngrok.io',
  },
}

module.exports = merge(config.all, config[config.all.env])
