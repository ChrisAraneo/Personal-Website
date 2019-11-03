import React from 'react';

import Wobble from '../images/wobble.png';
import colors from '../styles/colors';

const Background = (props) => (
    <div className="background" style={style}>
        {props.children}
    </div>
);

const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    width: '100%',
    minHeight: '100vh',
    backgroundColor: colors.dark
};

export default Background;