import React from 'react';
import Page from '../components/Page';
import Row from '../components/Row';
import Half from '../components/Half';
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import ProjectLink from '../components/ProjectLink'

const Portfolio = (props) => (
    <Page active={props.active} style={{ justifyContent: 'center' }}>
        <div style={{ backgroundImage: `url(${props.image ? props.image : ''})`, backgroundSize: 'cover' }}>
            <Row>
                <Half>
                    <ProjectLink id='01' title="Strona internetowa firmy"
                        active={props.active} delay={0} click={() => props.linkClick(4)}
                    />
                </Half>
                <Half>
                    <ProjectLink id='02' title="Aplikacja mobilna do detekcji wysokości nut"
                        active={props.active} delay={1} click={() => props.linkClick(5)} />
                </Half>
            </Row>
            <Row>
                <Half>
                    <ProjectLink id='03' title="Moje portfolio"
                        active={props.active} delay={2} click={() => props.linkClick(6)} />
                </Half>
                <Half>
                    <ProjectLink id='04' title="Portal internetowy dla podróżników"
                        active={props.active} delay={0} click={() => props.linkClick(6)} />
                </Half>
            </Row>
        </div>
    </Page >
);

export default Portfolio;