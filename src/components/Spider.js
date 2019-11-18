import React from 'react';
import '../styles/Spider.css';

class Spider extends React.Component {

    state = {
        spiderElement: null,
        spiderContainer: null,
    }

    componentDidMount() {
        if (this.state.spiderElement == null) {
            const spiderElement = document.getElementById("spider");
            const body = document.body;
            body.addEventListener('mousemove', (event) => {
                this.updateSpider(event);
            })
            this.setState({ spiderElement: spiderElement });
        }
    }

    updateSpider(event) {
        var e = event || window.event;
        const mouse_x = e.clientX;
        const mouse_y = e.clientY;
        const spider = this.state.spiderElement;
        var rect = spider.getBoundingClientRect();
        // mouse.updatePosition(event);
        const max = 2;
        let tX = (2 * (rect.x - mouse_x) / spider.offsetWidth).toFixed(2);
        let tY = (2 * (rect.y - mouse_y) / spider.offsetHeight).toFixed(2);
        if (Math.abs(tX) > max) {
            tX = Math.sign(tX) * max;
        }
        if (Math.abs(tY) > max) {
            tY = Math.sign(tY) * max;
        }
        this.updateTransformStyle(tY, tX);
    };

    updateTransformStyle = function (x, y) {
        const spider = this.state.spiderElement;
        var style = `rotateX(${x}deg) rotateY(${y}deg)`;
        spider.style.transform = style;
        spider.style.webkitTransform = style;
        spider.style.mozTransform = style;
        spider.style.msTransform = style;
        spider.style.oTransform = style;
    };

    render() {
        return (
            <div className="spider-container"
                style={{ backgroundImage: `url(${this.props.image})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <pre id="spider" className="spider">
                    {'//  \\\\'}<br />
                    {'_\\\\()//_'}<br />
                    {'/ //  \\\\ \\'}<br />
                    {'| \\__/ |'}<br />
                </pre>
            </div>
        );
    }
}

export default Spider;