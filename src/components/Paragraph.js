import React from 'react';
import '../styles/Paragraph.css';

const Paragraph = (props) => (
    <p className={`p ${props.active ? '' : 'blur'}`}>{props.children}</p>
);

export default Paragraph;