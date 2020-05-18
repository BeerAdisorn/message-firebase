import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navber">
                <div className="navbar-brand">
                    <a className="navbar-item" href="http://bulma.io">
                        {this.props.title}
                    </a>
                </div>
            </nav>
        )
    }
}

export default Header;