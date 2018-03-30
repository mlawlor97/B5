import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';
import {User} from '../UserFile';
import Login from '../pages/login';

class Header extends Component {

    refresh = null;

    componentDidMount() {
        this.refresh = setInterval(() => {
            this.forceUpdate();
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this.refresh);
        Login.tryLogout(User.name);
    }

    getValue() {
        if (User.name === '') {
            return <div>Login</div>;
        }
        return <div>Logout</div>;
    }

    getContactLink() {
        if (User.adminStatus) {
            return (<div><Link to="/Admin-Page">Admin Page</Link></div>);
        }
        return (<div><Link to='/Contact'>Contact</Link></div>)
    }

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
                        <li><Link to="/">{this.getValue()}</Link></li>
                        <li>{this.getContactLink()}</li>
                        </ul>
                    </nav>
                </span>

            </header>
        );
    }
}

export default Header;
