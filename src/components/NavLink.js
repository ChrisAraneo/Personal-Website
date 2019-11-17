import React from 'react';
import '../styles/NavLink.css'

const NavLink = (props) => (
    <div className={`nav-link ${props.active ? 'active' : ''}`}
        onMouseEnter={() => props.hover()}
    >{props.children}</div>
);

export default NavLink;