import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';
import {User} from '../UserFile';

class Header extends Component {

    render() {
        return (
            <header>

                <span>
                    <h1 className="App-title"><b>ADVENTURE ZONE</b></h1>
                    <h2 className="User-title" hidden={User.name === ''}>
                        Welcome: {User.name}</h2>
                    <nav className="App-links">
                        <ul>
                        <li><Link to="/Homepage">Home</Link></li>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Tictactoe">Tictactoe</Link></li>
                        </ul>
                    </nav>
                </span>

            </header>
        );
    }
}

export default Header;
