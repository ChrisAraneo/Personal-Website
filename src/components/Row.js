import React from 'react';

const Row = (props) => (
    <div className="row" style={style}>{props.children}</div>
);

const style = {
    display: 'flex',
    flexDirection: 'row',
}

export default Row;