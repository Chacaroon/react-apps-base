const {resolve} = require('path')
const express = require('express')
const app = express.Router()
const compression = require('compression')
const {publicPath, clientBuildPath} = require('../../config/application.config')

app.use(compression());
app.use(publicPath, express.static(clientBuildPath));

// all other requests be handled by UI itself
app.get('*', (req, res) => res.render(resolve(clientBuildPath, 'index.html')))

module.exports = app