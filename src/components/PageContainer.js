import React from 'react';
import colors from '../styles/colors';

const PageContainer = (props) => (
    <div className="page-container" style={containerStyle}>
        <div className="page-panel" style={panelStyle}>
            {props.children}
        </div>

    </div>
);

const containerStyle = {
    boxSizing: 'border-box',
    width: '100%',
    height: '100vh',
    backgroundColor: 'transparent',
    padding: '5rem',
    display: 'flex',
    flex: '1 1 0'
}

const panelStyle = {
    boxSizing: 'border-box',
    backgroundColor: colors.dark,
    width: '100%',
    border: '1px solid black',
    borderColor: colors.primary
}

export default PageContainer;