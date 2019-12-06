import React from 'react';
import Page from '../components/Page';
import Row from '../components/Row';
import Half from '../components/Half';
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import ProjectLink from '../components/ProjectLink'

const Portfolio = (props) => {
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
            <Row style={
                mobile ?
                    {}
                    :
                    { backgroundImage: `url(${props.image.path ? props.image.path : ''})`, backgroundSize: 'cover' }
            }>
                {props.projects.map(({ index, title, short }) => {
                    return (
                        <Half style={{ padding: 0 }} className={`${index < props.projects.length - 1 ? 'mobile-border' : ''}`}>
                            <ProjectLink
                                key={index}
                                id={index}
                                title={title}
                                short={short}
                                active={props.active}
                                delay={index % 3}
                                width={props.width}
                                height={props.height}
                                click={() => props.changeProject(index)}
                            />
                        </Half>
                    )
                })}
            </Row>
        </Page >
    );
}

export default Portfolio;