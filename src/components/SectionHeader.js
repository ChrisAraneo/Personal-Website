import React from 'react';

const SectionHeader = (props) => (
    <header className={`section-header ${props.className} ${props.mobile ? 'text-center' : ''}`}>
        <h1>{props.children}</h1>
    </header>
);

export default SectionHeader;