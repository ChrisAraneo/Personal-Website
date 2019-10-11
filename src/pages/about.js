import React from 'react';
import Row from '../components/Row';
import Half from '../components/Half';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import SectionBody from '../components/SectionBody';

class About extends React.Component {

    generateAboutSection() {
        return (
            <Section>
                <SectionHeader mobile={this.props.mobile}>O mnie</SectionHeader>
                <SectionBody>
                    Mam na imię Krzysiek i jestem absolwentem inżynierskich studiów informatycznych. Aspiruję na zostanie Web Developerem.
                Moim celem jest tworzenie wydajnych aplikacji webowych i kreatywnych stron internetowych. Posiadam również doświadczenie w programowaniu aplikacji mobilnych na system Android.
            Do moich zainteresowań i hobby zawsze należało programowanie, muzyka elektroniczna, sporty wodne, podróże.
                </SectionBody>
            </Section >
        );
    }

    generateSkillsSection() {
        return (
            <Section className="mb-1">
                <SectionHeader mobile={this.props.mobile}>Umiejętności</SectionHeader>
                <SectionBody>
                    <span className="badge">JavaScript ES6</span>
                    <span className="badge">Java</span>
                    <span className="badge">PHP</span>
                    <span className="badge">React</span>
                    <span className="badge">React Native</span>
                    <span className="badge">HTML 5</span>
                    <span className="badge">JSON</span>
                    <span className="badge">XML</span>
                    <span className="badge">CSS 3</span>
                    <span className="badge">SASS</span>
                    <span className="badge">Bootstrap</span>
                    <span className="badge">Git</span>
                    <span className="badge">NPM / Yarn</span>
                    <span className="badge">Gulp</span>
                    <span className="badge">Android Studio</span>
                </SectionBody>
            </Section>
        );
    }

    generateEducationSection() {
        return (
            <Section>
                <SectionHeader mobile={this.props.mobile}>Wykształcenie</SectionHeader>
                <SectionBody>
                    <div className="mb-1">
                        <p className="light mb-05">2019 - obecnie</p>
                        <p>Studia podyplomowe, kurs Technologie Internetowe, Politechnika Wrocławska.</p>
                    </div>
                    <div className="mb-1">
                        <p className="light mb-05">2015 - 2019</p>
                        <p>Studia inżynierskie, kierunek Informatyka na wydziale Podstawowych Problemów Techniki, Politechnika Wrocławska.</p>
                    </div>
                </SectionBody>
            </Section>
        );
    }

    renderMobile() {
        return (
            <>
                <Row>
                    {this.generateAboutSection()}
                </Row >
                <Row>
                    {this.generateSkillsSection()}
                </Row>
                <Row>
                    {this.generateEducationSection()}
                </Row>
            </>
        );
    }

    renderDesktop() {
        return (
            <Row>
                <Half>
                    {this.generateAboutSection()}
                </Half>
                <Half>
                    <Row>
                        {this.generateSkillsSection()}
                    </Row>
                    <Row>
                        {this.generateEducationSection()}
                    </Row>
                </Half>
            </Row>
        );
    }

    render() {
        if (this.props.mobile) {
            return this.renderMobile();
        } else {
            return this.renderDesktop();
        }
    }
}

export default About