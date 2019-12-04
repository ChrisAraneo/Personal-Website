import React from 'react';
import Page from '../components/Page';
import Row from '../components/Row';
import Half from '../components/Half';
import Link from '../components/Link';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Badge from '../components/Badge';

const Project = (props) => {
    const mobile = (props.width <= 1200);

    return (
        <Page
            active={props.active}
            style={
                mobile ?
                    { backgroundImage: `url(${props.background.path ? props.background.path : ''})`, backgroundSize: 'cover' }
                    :
                    {}
            }>
            <Row>
                <Half style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <Row>
                            <Link active={false} click={() => props.goBack()} style={{ marginBottom: '', textAlign: 'left' }}>Powrót</Link>
                        </Row>
                        <Row style={{ margin: '3rem 0' }}>
                            <Header active={props.active} delay={0} style={{ margin: '0rem' }}>{props.title}</Header>
                        </Row>
                        <Row>
                            <Paragraph active={props.active} delay={1}>
                                {props.description}
                            </Paragraph>
                        </Row>
                        <Row style={{ margin: '3rem 0' }}>
                            <Paragraph active={props.active} delay={2}>
                                {props.technologies ? props.technologies.map((name) => (
                                    <Badge>{name}</Badge>)) : null}
                            </Paragraph>
                        </Row>
                    </div>
                    <Row style={{ boxSizing: 'border-box', position: 'relative', bottom: 0, margin: 'inherit', display: 'flex', flexDirection: 'row', justifyContent: (props.goPrev === null ? 'flex-end' : 'space-between') }}>
                        {
                            props.goPrev !== null ?
                                (<Link active={false} click={() => props.goPrev()} style={{ display: 'block', maxWidth: '50%', boxSizing: 'border-box' }}>Poprzedni</Link>)
                                :
                                null
                        }
                        {
                            props.goNext !== null ?
                                (<Link active={false} click={() => props.goNext()} style={{ display: 'block', maxWidth: '50%', boxSizing: 'border-box' }}>Następny</Link>)
                                :
                                null
                        }
                    </Row>
                </Half>
                {mobile ?
                    null
                    :
                    <Half
                        style={
                            mobile ?
                                {}
                                :
                                { backgroundImage: `url(${props.background.path ? props.background.path : ''})`, backgroundSize: 'cover' }
                        }>
                        <figure style={{ width: '100%', height: '100%', minHeight: '600px', backgroundImage: `url(${props.image.path ? props.image.path : ''})`, backgroundSize: '100% auto', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat' }} />
                    </Half>
                }
            </Row>
        </Page >
    );
}

export default Project;