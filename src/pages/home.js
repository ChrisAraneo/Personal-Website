import React from 'react';
import Row from '../components/Row';
import Half from '../components/Half';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import SectionBody from '../components/SectionBody';

function Home() {
    return (
        <div id="page" className="page">
            <Row>
                <Half>
                    <Section>
                        <SectionHeader>Krzysztof Pająk</SectionHeader>
                        <SectionBody>
                            {'{ WEBSITE IS CURRENTLY UNDER DEVELOPMENT }'}
                        </SectionBody>
                    </Section>
                </Half>
                <Half>
                </Half>
            </Row>
        </div>
    )
}

export default Home