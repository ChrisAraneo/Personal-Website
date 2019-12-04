import React from 'react';
import '../styles/TextLight.css';

const TextLight = (props) => (
    <aside className="text-light" {...props}>{props.children}</aside>
);

export default TextLight;