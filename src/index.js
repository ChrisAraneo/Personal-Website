import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

/* Styling */
import './styles/index.css'

/* Components */
import Nav from './components/Nav';
import PageContainer from './components/PageContainer';
import SVGFigure from './components/SVGFigure';

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
        run: true
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
        if (route === "O mnie") {
            document.getElementById("svg-1").beginElement();
        } else {
            document.getElementById("svg-2").beginElement();
        }
    }

    render() {
        console.log(this.state.mobile)
        return (
            <Router>
                <Nav routes={this.routes} mobile={this.state.mobile} routeChange={(route) => this.handleRouteChange(route)} />
                <SVGFigure width={this.state.width} height={this.state.height} />
                <PageContainer mobile={this.state.mobile} routes={this.routes} />
            </Router>
        );
    }
}

/* Render */
ReactDOM.render(<App />, document.getElementById('root'));