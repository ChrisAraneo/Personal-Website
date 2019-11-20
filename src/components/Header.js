import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Header.css';

class Header extends React.Component {

    state = {
        isActive: false
    }

    render() {
        const show = (this.props.active && !this.state.isActive);
        const delay = (this.props.delay ? String(this.props.delay) : '0')
        return (
            <header className={`header`}>
                <h1 className={`h1 ${show ? `h1-in-${delay}` : `h1-out-${delay}`}`} style={{ ...this.props.style }}>{this.props.children}</h1>
            </header>
        );
    }
}

export default Header;