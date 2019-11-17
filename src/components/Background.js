import React from 'react';
import '../styles/Background.css'

const Background = (props) => (
    <div className="background">
        {props.children}
    </div>
);

export default Background;