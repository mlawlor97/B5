import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>

                <span>
                    <h1 className="App-title"><b>ADVENTURE ZONE</b></h1>

                    <nav className="App-links">
                        <ul>
                        <li><Link to="/Homepage">Home</Link></li>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </nav>
                </span>

            </header>
        );
    }
}

export default Header;
