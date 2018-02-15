import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header>

                <span>
                    <h1 className="App-title"><b>ADVENTURE ZONE</b></h1>

                    <nav className="App-links">
                        <li>Home</li>
                        <li>Contact</li>
                    </nav>
                </span>

            </header>
        );
    }
}

export default Header;
