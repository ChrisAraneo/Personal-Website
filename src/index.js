import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader';

/* COMPONENTS */
import Background from './components/Background'
import PageContainer from './components/PageContainer'
import Navigation from './components/Navigation'

/* PAGES */
import Start from './pages/Start'
import About from './pages/About'

WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
});

class App extends React.Component {

    state = {
        subpage: 0
    }

    routes = [
        {
            index: 0,
            name: 'Start',
            hover: (() => this.setState({ subpage: 0 })),
            page: <Start />
        },
        {
            index: 1,
            name: 'O mnie',
            hover: (() => this.setState({ subpage: 1 })),
            page: <About />
        },
        {
            index: 2,
            name: 'Portfolio',
            hover: (() => this.setState({ subpage: 2 })),
            page: null
        },
    ]

    render() {
        return (
            <Background>
                <PageContainer>
                    <Navigation routes={this.routes} active={this.state.subpage} />
                    {this.routes[this.state.subpage].page}
                </PageContainer>
            </Background>
        );
    }
}

/* Render */
ReactDOM.render(<App />, document.getElementById('root'));