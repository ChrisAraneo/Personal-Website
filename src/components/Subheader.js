import React from 'react';
import '../styles/Subheader.css';

const Subheader = (props) => (
    <h2 className={`h2 ${props.active ? '' : 'blur'}`}>
        {props.children}
    </h2 >
);

export default Subheader;