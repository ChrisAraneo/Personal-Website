import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

/* Styling */
import './index.css'

/* Components */
import Nav from './components/Nav';
import PageContainer from './components/PageContainer';

/* Pages */
import Home from './pages/home'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'


class App extends React.Component {

    /* Routes */
    routes = [
        { path: '/', name: 'Start', Component: Home },
        { path: '/about', name: 'O mnie', Component: About },
        { path: '/portfolio', name: 'Portfolio', Component: Portfolio },
        { path: '/contact', name: 'Kontakt', Component: Contact },
    ];

    render() {
        return (
            <Router>
                <Nav routes={this.routes} />
                <PageContainer routes={this.routes} />
            </Router>
        );
    }
}

/* Render */
ReactDOM.render(<App />, document.getElementById('root'));