import React from 'react';
import '../styles/NavLink.css'

const NavLink = (props) => (
    <div className={`nav-link ${props.active ? 'active' : ''}`}
        onClick={() => props.click()}
    >{props.children}</div>
);

export default NavLink;