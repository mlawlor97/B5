import React, {Component} from 'react';
// import './../../App.css';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className="App-header">

                <span>
                    <h1 className="App-title"><b>ADVENTURE ZONE</b></h1>

                    {/*<nav className="App-links">*/}
                        {/*<li>Home</li>*/}
                        {/*<li>Contact</li>*/}
                    {/*</nav>*/}
                </span>

            </header>
        );
    }
}

export default Header;
