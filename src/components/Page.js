import React from 'react';

const Page = (props) => (
    <main className="page" style={style}>
        {props.children}
    </main>
);

const style = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    color: 'white'
};

export default Page;