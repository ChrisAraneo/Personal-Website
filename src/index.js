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
                top = 'calc(-100% + 4rem)';
                break;
            case 2:
                top = 'calc(-200% + 4rem)';
                break;
        }
        console.log(this.state.active)
        return (
            <Background>
                <PageContainer>
                    <Navigation routes={this.routes} active={this.state.active} />
                    <div className="slides" style={{
                        position: 'relative',
                        transitionDuration: '0s',
                        transitionDelay: '1s',
                        top: top
                    }}>
                        <Start active={this.state.active === 0} />
                        <About active={this.state.active === 1} />
                        <Portfolio active={this.state.active === 2} />
                    </div>
                </PageContainer>
            </Background>
        );
    }
}

/* Render */
ReactDOM.render(<App />, document.getElementById('root'));