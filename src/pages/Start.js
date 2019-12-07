import React from 'react';
import Page from '../components/Page';
import Row from '../components/Row';
import Half from '../components/Half';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import AnimatedTransform from '../components/AnimatedTransform';

const Start = (props) => {
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
                <Half style={{ justifyContent: 'center' }}>
                    <header>
                        <Header active={props.active} style={{ textAlign: `${mobile ? 'center' : 'right'}`, marginBottom: '1rem' }}>Krzysztof Pająk</Header>
                        <Subheader active={props.active} delay={1} style={{ textAlign: `${mobile ? 'center' : 'right'}`, marginBottom: 0 }}>{`\{WEBSITE IN CONSTRUCTION\}`}</Subheader>
                    </header>
                </Half>
                {mobile ?
                    null
                    :
                    <Half>
                        <AnimatedTransform id='spider' active={props.active} image={props.image}>
                            <pre>
                                {'//  \\\\'}<br />
                                {'_\\\\()//_'}<br />
                                {'/ //  \\\\ \\'}<br />
                                {'| \\__/ |'}<br />
                            </pre>
                        </AnimatedTransform>
                    </Half>
                }

            </Row>
        </Page>
    );
}

export default Start;