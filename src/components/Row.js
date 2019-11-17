import React from 'react';
import '../styles/Row.css'

const Row = (props) => (
    <div className="row">{props.children}</div>
);

export default Row;