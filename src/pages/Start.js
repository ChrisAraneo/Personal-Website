import React from 'react';
import Page from '../components/Page';
import Row from '../components/Row';
import Half from '../components/Half';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import Spider from '../components/Spider';

const Start = (props) => (
    <Page active={props.active}>
        <Row>
            <Half style={{ justifyContent: 'center' }}>
                <header>
                    <Header active={props.active} style={{ textAlign: 'right', marginBottom: '0' }}>Krzysztof Pająk</Header>
                    <Subheader active={props.active} delay={1} style={{ textAlign: 'right' }}>Junior Web Developer</Subheader>
                </header>
            </Half>
            <Half>
                <Spider active={props.active} image={props.image} />
            </Half>
        </Row>
    </Page>
);

export default Start;