import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

/* Styling */
import './styles/index.css'

/* Components */
import Nav from './components/Nav';
import PageContainer from './components/PageContainer';
import Background from './components/Background';

/* Pages */
import Home from './pages/home'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'


class App extends React.Component {

    /* Mobile breakpoint */
    breakpointX = 1024;
    breakpointY = 640;

    state = {
        mobile: false,
        width: 0,
        height: 0,
        run: true,
        backgroundType: 0,
    }

    /* Routes */
    routes = [
        { path: '/', name: 'Start', Component: Home },
        { path: '/about', name: 'O mnie', Component: About },
        { path: '/portfolio', name: 'Portfolio', Component: Portfolio },
        { path: '/contact', name: 'Kontakt', Component: Contact },
    ];

    updateDimensions() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        if (width < this.breakpointX || height < this.breakpointY) {
            this.setState({ mobile: true, width: width, height: height });
        } else {
            this.setState({ mobile: false, width: width, height: height });
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    handleRouteChange(route) {
        if (route === "Start") {
            this.setState({ backgroundType: 0 })
        } else if (route === "O mnie") {
            this.setState({ backgroundType: 1 })
        } else if (route === "Portfolio") {
            this.setState({ backgroundType: 2 })
        } else if (route === "Kontakt") {
            this.setState({ backgroundType: 3 })
        }
    }

    render() {
        console.log(this.state.mobile)
        return (
            <Router>
                <Nav routes={this.routes} mobile={this.state.mobile} routeChange={(route) => this.handleRouteChange(route)} />
                <Background type={this.state.backgroundType} mobile={this.state.mobile} />
                <PageContainer mobile={this.state.mobile} routes={this.routes} />
            </Router>
        );
    }
}

/* Render */
ReactDOM.render(<App />, document.getElementById('root'));