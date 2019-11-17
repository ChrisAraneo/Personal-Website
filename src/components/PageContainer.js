import React from 'react';
import '../styles/PageContainer.css'

const PageContainer = (props) => (
    <div className="page-container">
        <div className="page-panel">
            {props.children}
        </div>
    </div>
);

export default PageContainer;