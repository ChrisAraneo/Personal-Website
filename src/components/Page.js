import React from 'react';
import '../styles/Page.css';

const Page = (props) => {
    return (
        <main className={`page ${props.active ? 'active' : ''}`} style={{ ...props.style }}>
            {props.children}
        </main >
    );
}

export default Page;