const express = require('express')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

if (process.env.NODE_ENV === 'development') {
	app.use(require('./middlewares/development'))
} else {
	app.use(require('./middlewares/production'))
}

app.use(require('./middlewares/errors-handler'))
app.use(require('./routes'))

module.exports = app
