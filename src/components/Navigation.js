import React from 'react';
import '../styles/Navigation.css'

import NavLink from './NavLink';

const Navigation = (props) => (
    <nav className="navigation">
        {
            props.routes.map(({ index, name, click }) => (
                <NavLink key={index} active={props.active == index ? true : false} click={click}>{name}</NavLink>
            ))
        }
    </nav>
);

export default Navigation;