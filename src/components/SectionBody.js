import React from 'react';

const SectionBody = (props) => (
    <section className={`section-body ${props.className}`}>
        {props.children}
    </section>
);

export default SectionBody;