import React from 'react';
import Page from '../components/Page';
import Row from '../components/Row';
import Half from '../components/Half';
import Header from '../components/Header'

const Project04 = (props) => (
    <Page active={props.active} style={{ justifyContent: 'center' }}>
        <Row>
            <Half style={{ justifyContent: 'center' }}>
                <header>
                    <Header active={props.active} style={{ textAlign: 'right', width: '100%' }}>{'\{ Portal internetowy Klubu Miłośników Podróży \}'}</Header>
                </header>
            </Half>
        </Row>
    </Page >
);

export default Project04;