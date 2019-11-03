import React from 'react';

import NavLink from './NavLink';
import colors from '../styles/colors';

const Navigation = (props) => (
    <nav className="navigation" style={style}>
        {
            props.routes.map(({ index, name, hover }) => (
                <NavLink active={props.active == index ? true : false} hover={hover}>{name}</NavLink>
            ))
        }
    </nav>
);

const style = {
    boxSizing: 'border-box',
    position: 'absolute',
    display: 'flex',
    justifyItems: 'flex-start',
    borderBottom: '1px solid black',
    borderRight: '1px solid black',
    borderColor: colors.primary
}

export default Navigation;