import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header>

                <span>
                    <h1 className="App-title"><b>ADVENTURE ZONE</b></h1>

                    <nav className="App-links">
                        <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/Login">Login</a></li>
                        <li><a href="/Contact-Us">Contact</a></li>
                        </ul>
                    </nav>
                </span>

            </header>
        );
    }
}

export default Header;
