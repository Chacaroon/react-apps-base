const app = require('express').Router()
const {resolve} = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../../config/webpack.config.development')
const {clientBuildDevPath} = require('../../config/application.config')
const logger = require('morgan')

const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
	stats: 'minimum'
}))
app.use(webpackHotMiddleware(compiler))
app.use(logger('dev'))

// all other requests be handled by UI itself
app.get('*', (req, res) => res.sendFile(resolve(clientBuildDevPath, 'index.html')))

module.exports = app