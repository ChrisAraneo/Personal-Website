import React from 'react';

class SVGFigure extends React.Component {

    state = {
        currentAnimation: 0
    }

    render() {
        return (
            <svg width="100%" height={`${this.props.height}`}>
                <polygon points="200,10 250,190 160,210" style={{ fill: "lime", stroke: "purple", strokeWidth: 1 }}>
                    <animate id="svg-1" attributeName="points" begin="indefinite" dur="300ms" to="200,0 250,290 160,310" />
                    <animate id="svg-2" attributeName="points" begin="indefinite" dur="300ms" to="0,0 250,290 160,310" />
                </polygon>
            </svg>
        );
    }
}

export default SVGFigure;