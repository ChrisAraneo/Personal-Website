import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {

    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <nav className='navigation'>
                <button className='toggle'>MENU</button>
                {this.props.routes.map(route => (
                    <NavLink
                        key={route.path}
                        to={route.path}
                        activeClassName="active"
                    >
                        {route.name}
                    </NavLink>
                ))}
            </nav>);
    }
}

export default Nav;