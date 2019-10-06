import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => (
    <nav className="navigation">
        {props.routes.map(route => (
            <NavLink
                key={route.path}
                to={route.path}
                className="px-2 py-1"
                activeClassName="active"
            >
                {route.name}
            </NavLink>
        ))}
    </nav>
);

export default Nav;