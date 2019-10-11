import React from 'react';

const SectionFooter = (props) => (
    <footer className={`section-footer ${props.className}`}>
        {props.children}
    </footer>
);

export default SectionFooter;