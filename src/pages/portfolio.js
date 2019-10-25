import React from 'react';
import { CSSTransition } from 'react-transition-group'

import Row from '../components/Row';
import Half from '../components/Half';
import Section from '../components/Section';
import Project from '../components/Project';

class Portfolio extends React.Component {
    state = {
        index: 0
    }

    projects = [
        {
            index: 0,
            header: 'Strona internetowa Eurostall',
            body: 'Responsywna strona internetowa firmy oferującej projektowanie i realizację konstrukcji stalowych. Wykonana w 2018 roku w ramach praktyk studenckich. Zaktualizowana w 2019 roku. Jednym z wyzwań było napisanie arkuszy stylów oraz skryptów samodzielnie, bez użycia dodatkowych bibliotek.',
            technologies: ['HTML 5', 'CSS 3', 'JavaScript']
        },
        {
            index: 1,
            header: 'Aplikacja mobilna do detekcji nut',
            body: 'Aplikacja mobilna na system Android z zaimplementowanymi algorytmami przetwarzania sygnałów, które są wykorzystane do określenia wysokości nut nagranego dźwięku. Zrealizowana w ramach pracy inżynierskiej.',
            technologies: ['Java', 'Android SDK', 'Git']
        },
        {
            index: 2,
            header: 'Moje portfolio',
            body: 'Strona na której aktualnie się znajdujesz. Znajduje się tutaj spis najistotniejszych projektów.',
            technologies: ['React', 'JavaScript', 'HTML 5', 'CSS 3', 'Git']
        },
        {
            index: 3,
            header: 'Strona Klubu Miłośników Podróży',
            body: 'Project w trakcie rozwoju. Serwis internetowy wrocławskiego Klubu Miłośników Podróży. Serwis ma umożliwiać publikowanie aktualności i przyszłych spotkań uczestników, udostępnianie zdjęć z podróży, oznaczanie zwiedzonych miejsc na wirtualnym globusie.',
            technologies: ['React', 'JavaScript', 'HTML 5', 'CSS 3', 'PHP', 'Bootstrap', 'WebGL Earth', 'Git']
        }
    ];

    renderMobile() {
        return (
            <div id="page" className="page">
                <div className="projects-row">
                    {this.projects.map(({ index, header, body, technologies }) => (
                        <>
                            <CSSTransition
                                key={index}
                                in={this.state.index === index}
                                timeout={500}
                                classNames="project-container"
                                unmountOnExit>
                                <div className="project-container">
                                    <Project
                                        index={index}
                                        header={header}
                                        body={body}
                                        technologies={technologies} />
                                </div>
                            </CSSTransition>
                        </>
                    ))}
                </div>
                <CSSTransition
                    in={true}
                    timeout={500}
                    classNames="page"
                    unmountOnExit>
                    <div className="project-buttons-container">
                        <button
                            className={`button ${this.state.index <= 0 ? 'disabled' : ''}`} disabled={this.state.index <= 0 ? true : false} onClick={() => this.setState({ index: this.state.index - 1 })}>Poprzedni</button>
                        <button
                            className={`button ${this.state.index >= this.projects.length - 1 ? 'disabled' : ''}`} disabled={this.state.index >= this.projects.length - 1 ? true : false} onClick={() => this.setState({ index: this.state.index + 1 })}>Następny</button>
                    </div>
                </CSSTransition>
            </div>
        );
    }

    renderDesktop() {
        return (
            <>
                <div id="page" className="page">
                    <Row>
                        <Half>
                            <div className="img-container">
                                <img src="img/project1.jpg" />
                            </div>
                            <div className="img-container-shadow">
                            </div>
                            <div className="img-container-shadow2">
                            </div>
                        </Half>
                        <Half>
                            {this.projects.map(({ index, header, body, technologies }) => (
                                <CSSTransition
                                    key={index}
                                    in={this.state.index === index}
                                    timeout={1000}
                                    classNames="project-container"
                                    unmountOnExit>
                                    <div className="project-container">
                                        <Project
                                            index={index}
                                            header={header}
                                            body={body}
                                            technologies={technologies} />
                                    </div>
                                </CSSTransition>
                            ))}
                        </Half>
                    </Row >
                </div>
                <div className="project-buttons-container">
                    <button
                        className={`button ${this.state.index <= 0 ? 'disabled' : ''}`} disabled={this.state.index <= 0 ? true : false} onClick={() => this.setState({ index: this.state.index - 1 })}>Poprzedni projekt</button>
                    <button
                        className={`button ${this.state.index >= this.projects.length - 1 ? 'disabled' : ''}`} disabled={this.state.index >= this.projects.length - 1 ? true : false} onClick={() => this.setState({ index: this.state.index + 1 })}>Następny projekt</button>
                </div>
            </>
        );
    }

    render() {
        if (this.props.mobile) {
            return this.renderMobile();
        }
        else {
            return this.renderDesktop();
        }
    }
}

export default Portfolio