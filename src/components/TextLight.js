import React from 'react';
import '../styles/TextLight.css';

const TextLight = (props) => (
    <span className="text-light" style={{ display: 'block' }}{...props}>{props.children}</span>
);

export default TextLight;