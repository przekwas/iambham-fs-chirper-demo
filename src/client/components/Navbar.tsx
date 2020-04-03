import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC<NavbarProps> = props => {
	return (
		<nav className="nav justify-content-end align-items-center p-1 mb-3 shadow">
			<NavLink exact to="/" className="btn btn-link" activeClassName="border-bottom border-primary">Link</NavLink>
			<NavLink exact to="/compose" className="btn btn-link" activeClassName="border-bottom border-primary">Link</NavLink>
		</nav>
	);
};

interface NavbarProps {}

export default Navbar;