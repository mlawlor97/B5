import React, {Component} from 'react';
import fetch from 'node-fetch';
import {User} from '../UserFile';
import {Redirect, withRouter} from 'react-router-dom';

class Login extends Component {

    constructor() {
        super();
        this.state = {username: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    onFieldChange(fieldName) {
        return function (event) {
            this.setState({[fieldName]: event.target.value});
        }
    }

    tryLogin = async (data, reg) => {
        if (data.username === '' || data.password === '') {
            alert('Invalid Username or Password');
            return 24;
        }
        let response;
        if (reg) {
            response = await fetch('http://proj-319-B5.cs.iastate.edu:3000/users/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
        } else {
            response = await fetch('http://proj-319-B5.cs.iastate.edu:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }

        if (response.status === 500) {
            if (reg) {
                alert('Username is taken');
            } else {
                alert(data.username + ' is not a registered user');
            }
            return -1;
        }

        if(!response.ok) {
            console.error(response.status);
            throw Error(response.status);
        }

        if (response.status === 200) {
            const message = await response.json();
            alert(message['message']);
            if (message['message'] === 'you are logged in') {
                User.name = data.username;
                this.props.history.push(Login);
            }
        }
    };

    handleSubmit(event) {
        if (!event.target.checkValidity()) {
            console.log('invalid form');
            return;
        }
        event.preventDefault();

        let data = {
            username: this.state.username,
            password: this.state.password
        };

        this.tryLogin(data, false);
    }

    handleRegister(event) {
        if (!event.target.checkValidity()) {
            console.log('invalid form');
            return;
        }
        event.preventDefault();

        let data = {
            username: this.state.username,
            password: this.state.password
        };

        this.tryLogin(data, true);
    }

    getPage() {
        if (User.name === '') {
            return (
                <form>
                    <label>
                        Username: <input type="text" value={this.state.username} name="username"
                                         onChange={this.onFieldChange('username').bind(this)}
                                         placeholder={'username'}/>
                    </label><br/>
                    <label>
                        Password: <input type="text" value={this.state.password} name="password"
                                         onChange={this.onFieldChange('password').bind(this)}
                                         placeholder={'password'}/>
                    </label><br/>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                    <button type="submit" onClick={this.handleRegister}>Register</button>
                </form>
            );
        } else {
            return (
              <div>
                  <button onClick={() => {
                      User.name = '';
                      this.props.history.go(Login);
                  }}>Logout</button>
              </div>
            );
        }
    }

    render() {
        return (
            <div className='Login-page'>
                {this.getPage()}
            </div>
        );
    }

}

export default Login;