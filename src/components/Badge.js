import React from 'react';
import '../styles/Badge.css'

const Badge = (props) => (
    <span className="badge">{props.children}</span>
);

export default Badge;