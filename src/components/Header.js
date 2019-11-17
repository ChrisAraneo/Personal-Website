import React from 'react';
import '../styles/Header.css';

const Header = (props) => (
    <h1 className={`h1 ${props.active ? '' : 'blur'}`}>{props.children}</h1>
);

export default Header;