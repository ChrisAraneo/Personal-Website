import React from 'react';
import colors from '../styles/colors';

class NavLink extends React.Component {
    render() {
        return (
            <div className="nav-link"
                onMouseEnter={() => { this.props.hover(); }}
                style={this.props.active ? styleActive : style}
            >{this.props.children}</div>
        );
    }
}

const style = {
    fontFamily: 'Titillium Web',
    backgroundColor: 'transparent',
    color: 'white',
    padding: '1rem 2.5rem',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontSize: '1.25rem'
}

const styleActive = {
    fontFamily: 'Titillium Web',
    backgroundColor: colors.primary,
    color: colors.dark,
    padding: '1rem 2.5rem',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontSize: '1.25rem'
}

export default NavLink;