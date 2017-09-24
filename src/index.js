import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import configureStore from 'bin/store'

import App from 'components/App'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={store}>
		<AppContainer>
			<Router history={history}>
				<Route path="/" component={App}>

				</Route>
			</Router>
		</AppContainer>
	</Provider>,
	document.getElementById('root')
)

if (module.hot) {
	module.hot.accept('./components/App', () => {
		const NextApp = require('./components/App').default
		render(
			<AppContainer>
				<NextApp/>
			</AppContainer>,
			document.getElementById('root')
		)
	})
}