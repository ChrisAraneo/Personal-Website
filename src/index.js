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
            click: (() => { this.onNavLinkClick(0) }),
            page: <Start />
        },
        {
            index: 1,
            name: 'O mnie',
            click: (() => { this.onNavLinkClick(1) }),
            page: <About />
        },
        {
            index: 2,
            name: 'Portfolio',
            click: (() => { this.onNavLinkClick(2) }),
            page: <Portfolio />
        },
        {
            index: 3,
            name: 'Kontakt',
            click: (() => { this.onNavLinkClick(3) }),
            page: <Contact />
        },
    ]

    onNavLinkClick(index) {
        if (this.state.active != index) {
            const delta = Date.now() - this.state.lastClick;
            if (delta >= 2000) {
                this.setState({ active: index, lastClick: Date.now() });
            }
        }
    }

    render() {
        let top = 0;
        switch (this.state.active) {
            case 0:
                top = '0';
                break;
            case 1:
                top = '-100%';
                break;
            case 2:
                top = '-200%';
                break;
            case 3:
                top = '-300%';
                break;
        }
        console.log(this.state.active)
        return (
            <Background>
                <Navigation routes={this.routes} active={this.state.active} />
                <PageContainer>
                    <div className="slides" style={{
                        position: 'relative',
                        transitionDuration: '0s',
                        transitionDelay: '1s',
                        top: top
                    }}>
                        <Start active={this.state.active === 0} image={wobble} />
                        <About active={this.state.active === 1} image={wobble2} />
                        <Portfolio active={this.state.active === 2} />
                        <Contact active={this.state.active === 3} />
                    </div>
                </PageContainer>
            </Background>
        );
    }
}

/* Render */
ReactDOM.render(<App />, document.getElementById('root'));