import React from 'react';

class Background extends React.Component {

    state = {
        currentAnimation: 0
    }

    renderDesktop() {
        return (
            <>
                <div className="background" data-type={this.props.type}></div>
                <div className="background2" data-type={this.props.type}></div>
            </>
        );
    }

    renderMobile() {
        return null;
    }

    render() {
        if (this.props.mobile) {
            return this.renderMobile();
        } else {
            return this.renderDesktop();
        }
    }
}

export default Background;