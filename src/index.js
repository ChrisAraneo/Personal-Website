import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

/* Styling */
import './styles/index.css'

/* Components */
import Nav from './components/Nav';
import PageContainer from './components/PageContainer';

/* Pages */
import Home from './pages/home'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'


class App extends React.Component {

    /* Mobile breakpoint */
    breakpoint = 1024;

    state = {
        mobile: false
    }

    /* Routes */
    routes = [
        { path: '/', name: 'Start', Component: Home },
        { path: '/about', name: 'O mnie', Component: About },
        { path: '/portfolio', name: 'Portfolio', Component: Portfolio },
        { path: '/contact', name: 'Kontakt', Component: Contact },
    ];

    updateDimensions() {
        if (window.innerWidth < this.breakpoint) {
            this.setState({ mobile: true });
        } else {
            this.setState({ mobile: false });
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        return (
            <Router>
                <Nav routes={this.routes} mobile={this.state.mobile} />
                <PageContainer mobile={this.state.mobile} routes={this.routes} />
            </Router>
        );
    }
}

/* Render */
ReactDOM.render(<App />, document.getElementById('root'));