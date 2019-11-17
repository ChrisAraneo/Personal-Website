import React from 'react';
import Page from '../components/Page';
import Row from '../components/Row';
import Half from '../components/Half';
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'

const Portfolio = (props) => (
    <Page active={props.active}>
        <Row>
            <Half>
                <header style={header}>
                    <Header active={props.active}>O mnie</Header>
                </header>
                <article>
                    <p style={p}>Mam na imię Krzysiek i jestem absolwentem inżynierskich studiów informatycznych. Aspiruję na zostanie Web Developerem. Moim celem jest tworzenie wydajnych aplikacji webowych i kreatywnych stron internetowych. Posiadam również doświadczenie w programowaniu aplikacji mobilnych na system Android. Do moich zainteresowań i hobby zawsze należało programowanie, muzyka elektroniczna, sporty wodne, podróże.</p>
                </article>
            </Half>
            <Half>
                <div>
                    <header style={header}>
                        <Header active={props.active}>Umiejętności</Header>
                    </header>
                    <article>
                        <Paragraph active={props.active}>
                            Mam na imię Krzysiek i jestem absolwentem inżynierskich studiów informatycznych. Aspiruję na zostanie Web Developerem. Moim celem jest tworzenie wydajnych aplikacji webowych i kreatywnych stron internetowych. Posiadam również doświadczenie w programowaniu aplikacji mobilnych na system Android. Do moich zainteresowań i hobby zawsze należało programowanie, muzyka elektroniczna, sporty wodne, podróże.
                        </Paragraph>
                    </article>
                </div>
                <div>
                    <header style={header}>
                        <Header active={props.active}>Wykształcenie</Header>
                    </header>
                    <article>
                        <p style={p}>Mam na imię Krzysiek i jestem absolwentem inżynierskich studiów informatycznych. Aspiruję na zostanie Web Developerem. Moim celem jest tworzenie wydajnych aplikacji webowych i kreatywnych stron internetowych. Posiadam również doświadczenie w programowaniu aplikacji mobilnych na system Android. Do moich zainteresowań i hobby zawsze należało programowanie, muzyka elektroniczna, sporty wodne, podróże.</p>
                    </article>
                </div>
            </Half>
        </Row>
    </Page>
);

const header = {
    fontFamily: 'Titillium Web'
}

const h1 = {
    fontSize: '4.5vw',
    lineHeight: '5vw',
    textAlign: 'left',
    marginBottom: '2rem'
}

const p = {
    fontFamily: 'Titillium Web',
    fontSize: '1.25rem'
}

const h2 = {
    fontSize: '2.5vw',
    lineHeight: '2.5vw',
    textAlign: 'right',
}

export default Portfolio;