import React, {Component} from 'react'
import {Navbar, MenuItem, Nav, NavItem, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

class Header extends Component {
	render() {
		return <Navbar fluid inverse collapseOnSelect>
			<Navbar.Header>
				<Navbar.Brand>
					<LinkContainer to='/'>
						<a>Filmster</a>
					</LinkContainer>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav>
					<NavItem eventKey={1} href="#">Добавить фильм</NavItem>
					<NavDropdown eventKey={2} title="Жанр" id="genre-nav-dropdown">
						<MenuItem eventKey={2.1}>Боевик</MenuItem>
					</NavDropdown>
					<NavDropdown eventKey={3} title="Год" id="year-nav-dropdown">
						<MenuItem eventKey={3.1}>2017</MenuItem>
					</NavDropdown>
				</Nav>
				<Nav pullRight>
					<NavItem eventKey={1} href="#">Login</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	}
}

export default Header