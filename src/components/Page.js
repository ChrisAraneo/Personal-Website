import React from 'react';
import '../styles/Page.css';

const Page = (props) => {
    return (
        <main className={`page ${props.active ? 'active' : ''}`}>
            {props.children}
        </main >
    );
}

export default Page;