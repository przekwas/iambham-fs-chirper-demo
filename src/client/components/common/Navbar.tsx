import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaPenAlt } from 'react-icons/fa';
import { pathing } from '../../utils';

const Navbar: React.FC<NavbarProps> = () => {
	const location = useLocation();
	const path = pathing(location.pathname);
	
	return (
		<nav className="nav align-items-center p-1 mb-3 shadow bg-secondary sticky-top">
			<span className="navbar-brand mb-0 h1">{path}</span>
			<div className="ml-auto d-flex justify-content-end align-items-center">
				<NavLink exact to="/" className="py-2 px-3 text-white" activeClassName="text-info border rounded border-info">
					<FaHome size="1.5rem" />
				</NavLink>
				<NavLink exact to="/compose" className="py-2 px-3 text-white" activeClassName="text-info border rounded border-info">
					<FaPenAlt size="1.5rem" />
				</NavLink>
			</div>
		</nav>
	);
};

interface NavbarProps {}

export default Navbar;