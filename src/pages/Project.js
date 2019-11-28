import React from 'react';
import Page from '../components/Page';
import Row from '../components/Row';
import Half from '../components/Half';
import Link from '../components/Link';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Badge from '../components/Badge';
import { isNullOrUndefined } from 'util';

const Project = (props) => (
    <Page active={props.active}>
        <Row style={{ justifyContent: 'center' }}>
            <Half style={{ padding: '0 2rem', boxSizing: 'border-box' }}>
                <Link active={false} click={() => props.goBack()} style={{ marginBottom: '', textAlign: 'left' }}>Powrót</Link>
            </Half>
        </Row>
        <Row style={{ justifyContent: 'center' }}>
            <Half>
                <Header active={props.active} delay={0} style={{ fontSize: '2.5rem', lineHeight: '2.5rem', margin: '2rem' }}>{props.title}</Header>
            </Half>
        </Row>
        <Row style={{ justifyContent: 'center' }}>
            <Half>
                <Paragraph active={props.active} delay={1}>
                    {props.description}
                </Paragraph>
            </Half>
        </Row>
        <Row style={{ justifyContent: 'center' }}>
            <Half>
                <Paragraph active={props.active} delay={2}>
                    {props.technologies ? props.technologies.map((name) => (
                        <Badge>{name}</Badge>)) : null}
                </Paragraph>
            </Half>
        </Row>
        <Row style={{ justifyContent: 'center' }}>
            <Half style={{ padding: '0 2rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'row', justifyContent: (props.goPrev === null ? 'flex-end' : 'space-between') }}>
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
            </Half>
        </Row>
    </Page >
);

export default Project;