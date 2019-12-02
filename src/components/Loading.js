import React from 'react';
import '../styles/Loading.css'

const Loading = (props) => (
    <div className="loading-page">
        <div>
            <h1>Wczytywanie strony...</h1>
            <h2>Proszę czekać</h2>
        </div>
    </div>
);

export default Loading;