import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader';

/* COMPONENTS */
import Background from './components/Background'
import Navigation from './components/Navigation'
import PageContainer from './components/PageContainer'
import Loading from './components/Loading'

/* PAGES */
import Start from './pages/Start'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Project from './pages/Project'

/* IMAGES */
import wobble from './images/wobble.png';
import wobble2 from './images/wobble-2.png';
import project1 from './images/eurostall.png';
import project2 from './images/note-detect.png';
import project3 from './images/wobble.png'; // TO DO
import project4 from './images/podroze.png';

WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
});

class App extends React.Component {

    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    state = {
        active: 0,
        lastClick: 0,
        loadedImages: 0,
        width: 0,
        height: 0
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

    images = [
        {
            path: wobble,
            object: null
        },
        {
            path: wobble2,
            object: null
        },
        {
            path: project1,
            object: null
        },
        {
            path: project2,
            object: null
        },
        {
            path: project3,
            object: null
        },
        {
            path: project4,
            object: null
        },
    ]

    projects = [
        {
            index: 0,
            title: 'Strona internetowa firmy',
            short: 'Statyczna strona internetowa',
            description: 'Responsywna strona internetowa firmy oferującej projektowanie i realizację konstrukcji stalowych. Wykonana w 2018 roku w ramach praktyk studenckich. Zaktualizowana w 2019 roku. Jednym z wyzwań było napisanie arkuszy stylów oraz skryptów samodzielnie, bez użycia dodatkowych bibliotek.',
            technologies: ['HTML 5', 'CSS 3', 'JavaScript'],
            image: this.images[2]
        },
        {
            index: 1,
            title: 'Aplikacja mobilna do detekcji wysokości nut',
            short: 'Aplikacja mobilna Android',
            description: 'Aplikacja mobilna na system Android z zaimplementowanymi algorytmami przetwarzania sygnałów, które są wykorzystane do określenia wysokości nut nagranego dźwięku. Zrealizowana w ramach pracy inżynierskiej.',
            technologies: ['Java', 'Android SDK', 'Git'],
            image: this.images[3]
        },
        {
            index: 2,
            title: 'Moje portfolio',
            short: 'Strona wykorzystująca React',
            description: '(W TRAKCIE BUDOWY) Strona na której aktualnie się znajdujesz. Znajduje się tutaj spis najistotniejszych projektów.',
            technologies: ['React', 'JavaScript', 'CSS 3 + SASS', 'HTML 5'],
            image: this.images[4]
        },
        {
            index: 3,
            title: 'Portal internetowy o tematyce podróżniczej',
            short: 'Strona z prostym CMS',
            description: '(W TRAKCIE BUDOWY) Prosty system zarządzania treścią dla stron o tematyce podróżniczej zrealizowany dla wrocławskiego Klubu Miłośników Podróży. Warstwa backend została wykonana przy użyciu języka PHP, dane zapisywane są w bazie MySQL, warstwa frontend wykorzystuje bibliotekę React. Strony internetowe oparte o ten system dają możliwość dodawania prelekcji, dodawania zdjęć z podróży, zaznaczania odwiedzonego kraju na globusie 3D.',
            technologies: ['PHP', 'MySQL', 'React', 'JavaScript', 'CSS 3 + SASS', 'HTML 5'],
            image: this.images[5]
        }
    ]

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        this.images.forEach(({ path, object, loaded }) => {
            if (object === null) {
                object = new Image();
                object.onload = () => {
                    console.log(path);
                    this.setState({ loadedImages: (this.state.loadedImages + 1) });
                }
                object.src = path;
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

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

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    render() {

        if (this.state.loadedImages != this.images.length) {
            return (
                <Loading />
            )
        } else {
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

                            <Start
                                active={this.state.active === 0}
                                image={this.images[0]}
                                background={this.images[1]}
                                width={this.state.width}
                                height={this.state.height}
                            />

                            <About
                                active={this.state.active === 1}
                                image={this.images[1]}
                                width={this.state.width}
                                height={this.state.height}
                            />

                            <Portfolio
                                active={this.state.active === 2}
                                image={this.images[1]}
                                changeProject={(id) => this.onNavigate(4 + id)}
                                projects={this.projects}
                                width={this.state.width}
                                height={this.state.height}
                            />

                            <Contact
                                active={this.state.active === 3}
                                image={this.images[1]}
                                width={this.state.width}
                                height={this.state.height}
                            />

                            {this.projects.map(({ index, title, description, technologies, image }) => (
                                <Project
                                    active={this.state.active === (4 + index)}
                                    title={title}
                                    description={description}
                                    technologies={technologies}
                                    background={this.images[1]}
                                    image={image}
                                    goBack={() => this.onNavigate(2)}
                                    goPrev={index > 0 ? () => this.onNavigate(3 + index) : null}
                                    goNext={index < this.projects.length - 1 ? () => this.onNavigate(5 + index) : null}
                                    width={this.state.width}
                                    height={this.state.height}
                                />
                            ))}
                        </div>
                    </PageContainer>
                </Background>
            );
        }
    }
}

/* Render */
ReactDOM.render(<App />, document.getElementById('root'));