import React, {Component} from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

export default class Routes extends Component {
	render() {
		<Router history={hashHistory}>
			<IndexRoute />
		</Router>
	}
}