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

/* PROJECT PAGES */
import Project01 from './pages/Project01'
import Project02 from './pages/Project02'
import Project03 from './pages/Project03'

/* IMAGES */
import wobble from './images/wobble.png';
import wobble2 from './images/wobble-2.png';

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

    onNavigate(index) {
        if (this.state.active != index) {
            const delta = Date.now() - this.state.lastClick;
            if (delta >= 2000) {
                this.setState({ active: index, lastClick: Date.now() });
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
                        <Portfolio active={this.state.active === 2} image={wobble2} linkClick={(id) => this.onNavigate(id)} />
                        <Contact active={this.state.active === 3} />
                        <Project01 active={this.state.active === 4} />
                        <Project02 active={this.state.active === 5} />
                        <Project03 active={this.state.active === 6} />
                    </div>
                </PageContainer>
            </Background>
        );
    }
}

/* Render */
ReactDOM.render(<App />, document.getElementById('root'));