import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import Header from 'components/Header'
import Body from 'components/Body'
import Sidebar from 'components/Sidebar'

export default class App extends Component {
	render() {
		return <Grid fluid>
			<Row>
				<Col>
					<Header/>
				</Col>
			</Row>
			<Row>
				<Grid>
					<Row>
						<Body/>
						<Sidebar/>
					</Row>
				</Grid>
			</Row>
		</Grid>
	}
}