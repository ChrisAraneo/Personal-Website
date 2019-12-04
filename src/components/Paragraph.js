import React from 'react';
import '../styles/Paragraph.css';

class Paragraph extends React.Component {

    state = {
        isActive: false
    }

    render() {
        const show = (this.props.active && !this.state.isActive);
        const delay = (this.props.delay ? String(this.props.delay) : '0')
        return (
            <p className={`p ${show ? `p-in-${delay}` : `p-out-${delay}`}`} {...this.props}>{this.props.children}</p>
        );
    }
}

export default Paragraph;