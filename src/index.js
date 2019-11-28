import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader';

/* COMPONENTS */
import Background from './components/Background'
import Navigation from './components/Navigation'
import PageContainer from './components/PageContainer'

/* PAGES */
import Start from './pages/Start'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Project from './pages/Project'

/* IMAGES */
import wobble from './images/wobble.png';
import wobble2 from './images/wobble-2.png';
import { isUndefined, isNull, isNullOrUndefined } from 'util';

WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
});

class App extends React.Component {

    state = {
        active: 0,
        lastClick: 0
    }

    routes = [
        {
            index: 0,
            name: 'Start',
            click: (() => { this.onNavigate(0) })
        },
        {
            index: 1,
            name: 'O mnie',
            click: (() => { this.onNavigate(1) })
        },
        {
            index: 2,
            name: 'Portfolio',
            click: (() => { this.onNavigate(2) })
        },
        {
            index: 3,
            name: 'Kontakt',
            click: (() => { this.onNavigate(3) })
        }
    ]

    projects = [
        {
            index: 0,
            title: 'Strona internetowa firmy',
            description: 'Responsywna strona internetowa firmy oferującej projektowanie i realizację konstrukcji stalowych. Wykonana w 2018 roku w ramach praktyk studenckich. Zaktualizowana w 2019 roku. Jednym z wyzwań było napisanie arkuszy stylów oraz skryptów samodzielnie, bez użycia dodatkowych bibliotek.',
            technologies: ['HTML 5', 'CSS 3', 'JavaScript']
        },
        {
            index: 1,
            title: 'Aplikacja mobilna do detekcji wysokości nut',
            description: 'Aplikacja mobilna na system Android z zaimplementowanymi algorytmami przetwarzania sygnałów, które są wykorzystane do określenia wysokości nut nagranego dźwięku. Zrealizowana w ramach pracy inżynierskiej.',
            technologies: ['Java', 'Android SDK', 'Git']
        },
        {
            index: 2,
            title: 'Moje portfolio',
            description: '(W TRAKCIE BUDOWY) Strona na której aktualnie się znajdujesz. Znajduje się tutaj spis najistotniejszych projektów.',
            technologies: ['React', 'JavaScript', 'CSS 3 + SASS', 'HTML 5']
        },
        {
            index: 3,
            title: 'System CMS dla stron o tematyce podróżniczej',
            description: '(W TRAKCIE BUDOWY) Prosty system zarządzania treścią dla stron o tematyce podróżniczej zrealizowany dla wrocławskiego Klubu Miłośników Podróży. Warstwa backend została wykonana przy użyciu języka PHP, dane zapisywane są w bazie MySQL, warstwa frontend wykorzystuje bibliotekę React. Strony internetowe oparte o ten system dają możliwość dodawania prelekcji, dodawania zdjęć z podróży, zaznaczania odwiedzonego kraju na globusie 3D.',
            technologies: ['PHP', 'MySQL', 'React', 'JavaScript', 'CSS 3 + SASS', 'HTML 5']
        }
    ]

    onNavigate(index) {
        if (this.state.active !== index) {
            const delta = Date.now() - this.state.lastClick;
            if (delta >= 2000) {
                this.setState({
                    active: index,
                    lastClick: Date.now()
                });
            }
        }
    }

    render() {
        return (
            <Background>
                <Navigation routes={this.routes} active={this.state.active} />
                <PageContainer>
                    <div className="slides" style={{
                        position: 'relative',
                        transitionDuration: '0s',
                        transitionDelay: '1s',
                        top: `${this.state.active * -100}%`
                    }}>
                        <Start active={this.state.active === 0} image={wobble} />
                        <About active={this.state.active === 1} image={wobble2} />
                        <Portfolio active={this.state.active === 2} image={wobble2} changeProject={(id) => this.onNavigate(4 + id)} projects={this.projects} />
                        <Contact active={this.state.active === 3} />
                        {this.projects.map(({ index, title, description, technologies }) => (
                            <Project
                                active={this.state.active === (4 + index)}
                                title={title}
                                description={description}
                                technologies={technologies}
                                goBack={() => this.onNavigate(2)}
                                goPrev={index > 0 ? () => this.onNavigate(3 + index) : null}
                                goNext={index < this.projects.length - 1 ? () => this.onNavigate(5 + index) : null} />
                        ))}
                    </div>
                </PageContainer>
            </Background>
        );
    }
}

/* Render */
ReactDOM.render(<App />, document.getElementById('root'));