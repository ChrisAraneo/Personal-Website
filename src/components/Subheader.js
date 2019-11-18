import React from 'react';
import '../styles/Subheader.css';

class Subheader extends React.Component {

    state = {
        isActive: false
    }

    render() {
        const show = (this.props.active && !this.state.isActive);
        const delay = (this.props.delay ? String(this.props.delay) : '0')
        return (
            <header className='header'>
                <h2 className={`h2 ${show ? `h2-in-${delay}` : `h2-out-${delay}`}`} style={{ ...this.props.style }}>{this.props.children}</h2>
            </header>

        );
    }
}
export default Subheader;