import React from 'react';
import '../styles/Navigation.css'

import NavLink from './NavLink';

const Navigation = (props) => (
    <nav className="navigation">
        {
            props.routes.map(({ index, name, click, hidden }) => {
                if (!hidden) {
                    return (
                        <NavLink key={index} active={props.active == index ? true : false} click={click}>{name}</NavLink>
                    );
                } else {
                    return null;
                }
            })
        }
    </nav>
);

export default Navigation;