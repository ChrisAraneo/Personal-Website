import React from 'react';
import '../styles/Link.css'

const Link = (props) => (
    <a href="#" className={`link ${props.active ? 'active' : ''}`} style={{ ...props.style }}
        onClick={() => props.click()}
    >{props.children}</a>
);

export default Link;