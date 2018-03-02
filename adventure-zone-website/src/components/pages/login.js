import React, {Component} from 'react';
import fetch from 'node-fetch';
import userfile from '../UserFile';

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

        fetch('http://proj-319-B5.cs.iastate.edu:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function (response) {
            if (response.status === 500) {
                alert(data.username + ' is not a registered user');
            }

            if(!response.ok) {
                console.error(response.status);
                throw Error(response.status);
            }

            if (response.status === 200) {
                response.json().then(function (message) {
                    alert(message['message']);
                    if (message['message'] === 'you are logged in') {
                        userfile.setName(data.username);
                    }
                });
            }

            return JSON.stringify(response);
        }).catch(error => {
            console.error("Error: ", error);
        });
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

        fetch('http://proj-319-B5.cs.iastate.edu:3000/users/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function (response) {
            if (response.status === 500) {
                alert('Username is taken');
            }

            if(!response.ok) {
                console.error(response.status);
                throw Error(response.status);
            }

            if (response.status === 200) {
                response.json().then(function (message) {
                    alert(message['message']);
                    if (message['message'] === 'you are logged in') {
                        userfile.setName(data.username);
                    }
                });
            }

            return JSON.stringify(response);
        }).catch(error => {
            console.error("Error: ", error);
        });
    }

    render() {
        return (
            <div className='Login-page'>
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
            </div>
        );
    }

}

export default Login;