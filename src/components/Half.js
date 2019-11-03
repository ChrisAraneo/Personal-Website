import React from 'react';

const Half = (props) => (
    <div className="half" style={style}>{props.children}</div>
);

const style = {
    boxSizing: 'border-box',
    padding: '4rem',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}

export default Half;