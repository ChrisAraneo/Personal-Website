import React from 'react';

const Section = (props) => (
    <div className={`section ${props.className}`}>
        {props.children}
    </div>
);

export default Section;