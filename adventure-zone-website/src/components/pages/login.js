import React, {Component} from 'react';


class Login extends Component {
    // let SERVER_IP = '10.36.16.229:3000';

    constructor() {
        super();
        this.state = {username: '', password: ''};

        // this.onFieldChange = this.onFieldChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
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

        const url = 'http://10.36.17.71:3000/users';

        let data = {
            "username": 'matt',
            "password": 'password'
        }

        fetch(url, {
            method: 'post',
            headers: new Headers({
                'content-type': 'application'
            }),
            body: JSON.stringify(data)
        }).then(function (response) {
            console.log(response.json());
            if(!response.ok) {
                console.log(response.statusCode);
                throw Error(response.statusCode);
            }
            return response.json();
        }).catch(error => {
            console.error("Error: ", error);
        })
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