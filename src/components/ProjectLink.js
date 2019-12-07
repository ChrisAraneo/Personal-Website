import React from 'react';
import '../styles/ProjectLink.css';

import Header from '../components/Header';
import Subheader from '../components/Subheader';
import BorderLeft from '../components/BorderLeft';

const ProjectLink = (props) => {
    const mobile = (props.width <= 1200);
    return (
        <div className={`project-link ${props.active ? 'active' : ''}`} style={{ ...props.style }} onClick={() => props.click()}>
            <div style={{ display: 'flex', flexDirection: `${mobile ? 'column' : 'row'}`, justifyContent: `${mobile ? 'center' : 'flex-start'}` }}>
                <Subheader
                    active={props.active}
                    delay={props.delay}
                    style={{ margin: `${mobile ? '0' : '0 1rem 0 0'}`, textAlign: 'left' }}>
                    {mobile ? 'Projekt ' : ''}
                    {
                        String(props.id + 1).length < 2 ? '0' + (props.id + 1) : String(props.id + 1)
                    }
                </Subheader>
                <Subheader
                    active={props.active}
                    delay={props.delay}
                    style={{ fontSize: '1.6rem', lineHeight: '2.2rem', margin: '0', color: 'rgba(255,255,255,.75)', fontWeight: 'normal', textAlign: 'left' }}>
                    {props.short}
                </Subheader>
            </div>
            <BorderLeft active={props.active} delay={props.delay} style={{ margin: '1.5rem 0' }} />
            <Header
                active={props.active
                }
                delay={props.delay}
                style={{ margin: 0, textAlign: 'left' }}>
                {props.title}
            </Header>
        </div>
    );
};

export default ProjectLink;