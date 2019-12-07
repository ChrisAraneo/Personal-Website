import React from 'react';
import '../styles/AnimatedTransform.css';

class AnimatedTransform extends React.Component {

    state = {
        isActive: false,
        element: null,
        container: null,
    }

    componentDidMount() {
        if (this.state.element == null) {
            const element = document.getElementById(String(this.props.id));
            const body = document.body;
            body.addEventListener('mousemove', (event) => {
                this.update(event);
            })
            this.setState({ element: element });
        }
    }

    update(event) {
        var e = event || window.event;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const elem = this.state.element;
        var rect = elem.getBoundingClientRect();

        const max = 2;
        let tX = (-2 * (rect.x - mouseX) / elem.offsetWidth).toFixed(2);
        let tY = (2 * (rect.y - mouseY) / elem.offsetHeight).toFixed(2);
        if (Math.abs(tX) > max) {
            tX = Math.sign(tX) * max;
        }
        if (Math.abs(tY) > max) {
            tY = Math.sign(tY) * max;
        }
        this.updateTransformStyle(tY, tX);
    };

    updateTransformStyle = function (x, y) {
        const elem = this.state.element;
        var style = `rotateX(${x}deg) rotateY(${y}deg)`;
        elem.style.transform = style;
        elem.style.webkitTransform = style;
        elem.style.mozTransform = style;
        elem.style.msTransform = style;
        elem.style.oTransform = style;
    };

    render() {
        const show = (this.props.active && !this.state.isActive);
        const delay = (this.props.delay ? String(this.props.delay) : '0')
        return (
            <div className={`animated-transform-container ${show ? `animated-transform-in-${delay}` : `animated-transform-out-${delay}`}`}
                style={{ backgroundImage: `url(${this.props.image ? this.props.image : ''})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div id={String(this.props.id)} className="animated-transform" style={{ ...this.props.style }}>
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default AnimatedTransform;