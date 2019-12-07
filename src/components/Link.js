import React from 'react';
import '../styles/Link.css'

const Link = (props) => {
    if (props.click) {
        return (<a href={`${props.href ? props.href : '#'}`} className={`link ${props.active ? 'active' : ''}`} style={{ ...props.style }}
            onClick={() => { props.click() }} {...props}>
            {props.children}
        </a>);
    } else {
        return (<a href={`${props.href ? props.href : '#'}`} className={`link ${props.active ? 'active' : ''}`} style={{ ...props.style }} {...props}>
            {props.children}
        </a>);
    }
}

export default Link;