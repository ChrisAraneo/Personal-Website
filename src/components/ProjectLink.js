import React from 'react';
import '../styles/ProjectLink.css'

import Header from '../components/Header'
import Subheader from '../components/Subheader'

const ProjectLink = (props) => (
    <div className={`project-link ${props.active ? 'active' : ''}`} style={{ ...props.style }} onClick={() => props.click()}>
        <Subheader active={props.active} delay={props.delay} style={{ marginBottom: '2rem' }}>{String(props.id + 1).length < 2 ? '0' + (props.id + 1) : String(props.id + 1)}</Subheader>
        <Header active={props.active} delay={props.delay} style={{ fontSize: '2.5rem', lineHeight: '2.5rem', margin: 0 }}>{props.title}</Header>
    </div>
);

export default ProjectLink;