import React from 'react';
import Page from '../components/Page';
import Row from '../components/Row';
import Half from '../components/Half';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import Paragraph from '../components/Paragraph';
import TextLight from '../components/TextLight';
import Link from '../components/Link';
import AnimatedTransform from '../components/AnimatedTransform'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

class Contact extends React.Component {

    state = {
        hovered: null
    }

    componentDidMount() {
        const init = (name) => {
            const panel = document.getElementById(`${name}-panel`);
            panel.addEventListener('mouseenter', () => {
                if (this.state.hovered !== name) {
                    this.setState({ hovered: name });
                }
            });
            panel.addEventListener('mouseleave', () => {
                if (this.state.hovered !== null) {
                    this.setState({ hovered: null });
                }
            });
        }
        init('email');
        init('github');
    }

    render() {
        const props = this.props;
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
                <Row>
                    <Half style={{ justifyContent: 'center' }}>
                        <Header active={props.active} delay={0} style={{ textAlign: `${mobile ? 'center' : 'right'}` }}>
                            Krzysztof Pająk
                        </Header>
                        <article>
                            <Paragraph active={props.active} delay={1} style={{ display: 'flex', flexDirection: 'column', alignItems: `${mobile ? 'center' : 'flex-end'}` }}>
                                <div id="email-panel" style={{ display: 'flex', flexDirection: 'row', justifyContent: `${mobile ? 'center' : 'flex-start'}`, marginBottom: '1rem' }}>
                                    {
                                        mobile ?
                                            null
                                            :
                                            <Subheader
                                                active={props.active}
                                                delay={props.delay}
                                                style={{ fontSize: '1.75rem', padding: '2px 0', margin: `${mobile ? '0' : '0 2.5rem 0 0'}` }}>
                                                Email
                                    </Subheader>
                                    }

                                    <Subheader
                                        active={props.active}
                                        delay={props.delay}
                                        style={{ fontSize: '1.6rem', lineHeight: '2.2rem', margin: '0', color: 'rgba(255,255,255,.75)', fontWeight: 'normal', textAlign: 'center' }}>
                                        <Link href="mailto:chris.araneo@gmail.com" target="_blank" style={{ textTransform: 'inherit', fontSize: '1.75rem', float: 'right' }}> chris.araneo@gmail.com</Link>
                                    </Subheader>
                                </div>
                                <div id="github-panel" style={{ display: 'flex', flexDirection: 'row', justifyContent: `${mobile ? 'center' : 'flex-start'}` }}>
                                    {mobile ?
                                        null
                                        :
                                        <Subheader
                                            active={props.active}
                                            delay={props.delay}
                                            style={{ fontSize: '1.75rem', padding: '2px 0', margin: `${mobile ? '0' : '0 2.5rem 0 0'}`, textAlign: 'right' }}>
                                            Git
                                    </Subheader>
                                    }
                                    <Subheader
                                        active={props.active}
                                        delay={props.delay}
                                        style={{ fontSize: '1.6rem', lineHeight: '2.2rem', margin: '0', color: 'rgba(255,255,255,.75)', fontWeight: 'normal', textAlign: 'center' }}>
                                        <Link href="mailto:chris.araneo@gmail.com" target="_blank" style={{ textTransform: 'inherit', fontSize: '1.75rem', float: 'right' }}>github.com/ChrisAraneo</Link>
                                    </Subheader>
                                </div>
                            </Paragraph>
                        </article>
                    </Half>
                    {
                        mobile ?
                            null
                            :
                            <Half>
                                <AnimatedTransform id='at' active={props.active} image={props.image} style={{ fontSize: '10rem' }}>
                                    {this.state.hovered ? null :
                                        <h1 className="h1" style={{ textAlign: 'center', transform: 'translateY(0)', margin: 0, padding: 0 }}>Kontakt</h1>
                                    }

                                    <div style={{ fontSize: '4rem', lineHeight: '4rem' }}>
                                        {this.state.hovered ?
                                            (this.state.hovered === 'email' ?
                                                (<FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '12rem' }} />)
                                                :
                                                (this.state.hovered === 'github' ?
                                                    (<FontAwesomeIcon icon={faCodeBranch} style={{ fontSize: '12rem' }} />)
                                                    :
                                                    '')
                                            )
                                            :
                                            ''
                                        }
                                    </div>
                                </AnimatedTransform>
                            </Half>
                    }
                </Row>
            </Page >
        );
    }
}

export default Contact;