import React from 'react';
import '../styles/Navigation.css'

import NavLink from './NavLink';

const Navigation = (props) => (
    <nav className="navigation">
        {
            props.routes.map(({ index, name, hover }) => (
                <NavLink key={index} active={props.active == index ? true : false} hover={hover}>{name}</NavLink>
            ))
        }
    </nav>
);

export default Navigation;