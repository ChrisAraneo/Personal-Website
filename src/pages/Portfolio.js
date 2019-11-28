import React from 'react';
import Page from '../components/Page';
import Row from '../components/Row';
import Half from '../components/Half';
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import ProjectLink from '../components/ProjectLink'

const Portfolio = (props) => (
    <Page active={props.active}>
        <Row style={{ backgroundImage: `url(${props.image ? props.image : ''})`, backgroundSize: 'cover' }}>
            {props.projects.map(({ index, title }) => {
                return (
                    <Half>
                        <ProjectLink
                            id={index}
                            title={title}
                            active={props.active}
                            delay={index % 3}
                            click={() => props.changeProject(index)}
                        />
                    </Half>
                )
            })}
        </Row>
    </Page >
);

export default Portfolio;