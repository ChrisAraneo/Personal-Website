import React from 'react';
import Page from '../components/Page';
import Row from '../components/Row';
import Half from '../components/Half';
import Header from '../components/Header';
import Subheader from '../components/Subheader';

const Start = (props) => (
    <Page active={props.active} style={{ justifyContent: 'center' }}>
        <Row>
            <Half>
                <header>
                    <Header active={props.active}>Krzysztof Pająk</Header>
                    <Subheader active={props.active}>{`\{ Strona w trakcie rozbudowy \}`}</Subheader>
                </header>
            </Half>
            <Half>
                <pre style={{ fontSize: '4vw', textAlign: 'center' }}>
                    {'//  \\\\'}<br />
                    {'_\\\\()//_'}<br />
                    {'/ //  \\\\ \\'}<br />
                    {'| \\__/ |'}<br />
                </pre>
            </Half>
        </Row>
    </Page >
);

export default Start;