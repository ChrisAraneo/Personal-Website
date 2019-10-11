import React from 'react';
import Row from '../components/Row';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import SectionBody from '../components/SectionBody';

function Home() {
    return (
        <Row>
            <Section>
                <SectionHeader>Krzysztof Pająk</SectionHeader>
                <SectionBody>
                    {'{ WEBSITE IS CURRENTLY UNDER DEVELOPMENT }'}
                </SectionBody>
            </Section>
        </Row>
    )
}

export default Home