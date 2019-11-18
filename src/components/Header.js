import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Header.css';

class Header extends React.Component {

    state = {
        thisNode: null,
        isActive: false
    }

    componentDidMount() {
        this.setState({ thisNode: ReactDOM.findDOMNode(this) });
        console.log(ReactDOM.findDOMNode(this));
    }

    render() {
        const show = (this.props.active && !this.state.isActive);
        const delay = (this.props.delay ? String(this.props.delay) : '0')
        return (
            <header className={`header left`}>
                <h1 className={`h1 ${show ? `h1-in-${delay}` : `h1-out-${delay}`}`}>{this.props.children}</h1>
            </header>
        );
    }
}

export default Header;