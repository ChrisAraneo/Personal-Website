import React from 'react';

const SectionHeader = (props) => (
    <header className={`section-header ${props.className}`}>
        <h1>{props.children}</h1>
    </header>
);

export default SectionHeader;