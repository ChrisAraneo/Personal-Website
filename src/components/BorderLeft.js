import React from 'react';
import '../styles/Border.css';

class BorderLeft extends React.Component {

    state = {
        isActive: false
    }

    render() {
        const show = (this.props.active && !this.state.isActive);
        const delay = (this.props.delay ? String(this.props.delay) : '0')
        return (
            <div className='border-wrapper' style={{ width: '100%', minHeight: '2px' }}>
                <div className={`border ${show ? `border-left-in-${delay}` : `border-left-out-${delay}`}`} style={{ maxWidth: '40%', ...this.props.style }}>{this.props.children}</div>
            </div>
        );
    }
}

export default BorderLeft;