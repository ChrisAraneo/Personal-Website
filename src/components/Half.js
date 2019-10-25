import React from 'react';

const Half = (props) => (
    <div className={`half ${props.dark == true ? 'dark' : ''}`}>
        {props.children}
    </div>
);

export default Half;