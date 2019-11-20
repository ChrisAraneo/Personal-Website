import React from 'react';
import '../styles/NavLink.css'

const NavLink = (props) => (
    <div className={`nav-link ${props.active ? 'active' : ''}`} style={{ ...props.style }}
        onClick={() => props.click()}
    >{props.children}</div>
);

export default NavLink;