import React from 'react';
import '../styles/Half.css';

const Half = (props) => (
    <div className={`half`} style={{ ...props.style }}>{props.children}</div>
);

export default Half;