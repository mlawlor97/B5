import React, {Component} from 'react';
import fetch from 'node-fetch';

class Login extends Component {
    // let SERVER_IP = '10.36.16.229:3000';

    constructor() {
        super();
        this.state = {username: '', password: ''};
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

        const url = 'http://10.26.180.3:3000/users';

        let data = {
            username: event.target.username.value,
            password: event.target.password.value
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function (response) {
            if(!response.ok) {
                console.error(response.status);
                throw Error(response.status);
            }
            return JSON.stringify(response);
        }).catch(error => {
            console.error("Error: ", error);
        });
    }

    render() {
        return (
            <div className='Login-page'>
                <form onSubmit={this.handleSubmit}>
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
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }

}

export default Login;