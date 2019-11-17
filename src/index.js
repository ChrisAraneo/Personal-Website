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
        active: 0
    }

    routes = [
        {
            index: 0,
            name: 'Start',
            hover: (() => { this.setState({ active: 0 }) }),
            page: <Start />
        },
        {
            index: 1,
            name: 'O mnie',
            hover: (() => { this.setState({ active: 1 }) }),
            page: <About />
        },
        {
            index: 2,
            name: 'Portfolio',
            hover: (() => { this.setState({ active: 2 }) }),
            page: <Portfolio />
        },
    ]

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
        }
        console.log(this.state.active)
        return (
            <Background>
                <Navigation routes={this.routes} active={this.state.active} />
                <PageContainer>
                    <div className="slides" style={{
                        position: 'relative',
                        transitionDuration: '.3s',
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