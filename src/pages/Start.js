import React from 'react';
import Page from '../components/Page';
import Row from '../components/Row';
import Half from '../components/Half';

const Start = (props) => (
    <Page>
        <Row>
            <Half>
                <header style={header}>
                    <h1 style={h1}>Krzysztof Pająk</h1>
                    <h2 style={h2}>Junior Web Developer</h2>
                </header>
            </Half>
            <Half>
                <pre style={spider}>
                    {'//  \\\\'}<br />
                    {'_\\\\()//_'}<br />
                    {'/ //  \\\\ \\'}<br />
                    {'| \\__/ |'}<br />
                </pre>
            </Half>
        </Row>
    </Page>
);

const spider = {
    fontSize: '4vw',
    textAlign: 'center'
}

const header = {
    fontFamily: 'Titillium Web'
}

const h1 = {
    fontSize: '4.5vw',
    lineHeight: '5vw',
    textAlign: 'right',
}

const h2 = {
    fontSize: '2.5vw',
    lineHeight: '2.5vw',
    textAlign: 'right',
}

export default Start;