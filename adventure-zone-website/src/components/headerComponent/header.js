import React, {Component} from 'react';
// import {login} from './login';

class Header extends Component {
    render() {
        return (
            <header>

                <span>
                    <h1 className="App-title"><b>ADVENTURE ZONE</b></h1>

                    <nav className="App-links">
                        <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </span>

            </header>
        );
    }
}

export default Header;
