import React from 'react';
import Page from '../components/Page';
import Row from '../components/Row';
import Half from '../components/Half';
import Header from '../components/Header';
import TextLight from '../components/TextLight';
import Paragraph from '../components/Paragraph';
import Badge from '../components/Badge';
import Border from '../components/Border';

const About = (props) => {
    const mobile = (props.width <= 1200);
    return (
        <Page
            active={props.active}
            style={
                mobile ?
                    { backgroundImage: `url(${props.image.path ? props.image.path : ''})`, backgroundSize: 'cover' }
                    :
                    {}
            }>
            <Row>
                <Half
                    style={
                        mobile ?
                            {}
                            :
                            { backgroundImage: `url(${props.image.path ? props.image.path : ''})`, backgroundSize: 'cover' }
                    }
                    className='mobile-border'>
                    <Header active={props.active} delay={0}>O mnie</Header>
                    <div style={{ width: '40%', height: 'auto', marginBottom: '2rem' }}>
                        <Border active={props.active} delay={0} />
                    </div>
                    <article>
                        <Paragraph active={props.active} delay={0}>Mam na imię Krzysiek i jestem absolwentem inżynierskich studiów informatycznych. Aspiruję na zostanie Web Developerem. Moim celem jest tworzenie wydajnych aplikacji webowych i kreatywnych stron internetowych. Posiadam również doświadczenie w programowaniu aplikacji mobilnych na system Android. Do moich zainteresowań i hobby zawsze należało programowanie, muzyka elektroniczna, sporty wodne, podróże.</Paragraph>
                    </article>
                </Half>
                <Half style={{ padding: 0 }}>
                    <div style={{ padding: '2rem' }}
                        className='mobile-border'>
                        <Header active={props.active} delay={1}>Umiejętności</Header>
                        <div style={{ width: '40%', height: 'auto', marginBottom: '2rem' }}>
                            <Border active={props.active} delay={1} />
                        </div>
                        <article>
                            <Paragraph active={props.active} delay={1}>
                                <Badge>JavaScript ES6</Badge>
                                <Badge>Java</Badge>
                                <Badge>PHP</Badge>
                                <Badge>React</Badge>
                                <Badge>React Native</Badge>
                                <Badge>HTML 5</Badge>
                                <Badge>JSON</Badge>
                                <Badge>XML</Badge>
                                <Badge>CSS 3</Badge>
                                <Badge>SCSS</Badge>
                                <Badge>Bootstrap</Badge>
                                <Badge>Git</Badge>
                                <Badge>NPM</Badge>
                                <Badge>Gulp.js</Badge>
                                <Badge>Android SDK</Badge>
                            </Paragraph>
                        </article>
                    </div>
                    <div style={
                        mobile ?
                            { padding: '2rem' }
                            :
                            { padding: '0 2rem 2rem 2rem' }}>
                        <Header active={props.active} delay={2}>Wykształcenie</Header>
                        <div style={{ width: '40%', height: 'auto', marginBottom: '2rem' }}>
                            <Border active={props.active} delay={2} />
                        </div>
                        <article>
                            <Paragraph active={props.active} delay={1}>
                                <TextLight>2019 - obecnie</TextLight>
                                Studia podyplomowe Technologie Internetowe, Politechnika Wrocławska
                            </Paragraph>
                            <Paragraph active={props.active} delay={2}>
                                <TextLight>2015 - 2019</TextLight>
                                Studia inżynierskie, kierunek Informatyka na wydziale Podstawowych Problemów Techniki, Politechnika Wrocławska
                        </Paragraph>
                        </article>
                    </div>
                </Half>
            </Row>
        </Page >
    )
};

export default About;