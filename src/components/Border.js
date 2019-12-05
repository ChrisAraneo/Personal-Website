import React from 'react';
import '../styles/Border.css'

class Border extends React.Component {

    state = {
        isActive: false
    }

    render() {
        const show = (this.props.active && !this.state.isActive);
        const delay = (this.props.delay ? String(this.props.delay) : '0')
        return (
            <div className='border-wrapper'>
                <div className={`border ${show ? `border-in-${delay}` : `border-out-${delay}`}`} style={{ ...this.props.style }}>{this.props.children}</div>
            </div>
        );
    }
}

export default Border;