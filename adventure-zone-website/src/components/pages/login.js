import React, {Component} from 'react';
import request from "../../../node_modules/superagent/superagent";

class Login extends Component {
    constructor() {
        super();
        this.state = {userName: '', password: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onFieldChange(fieldName) {
        return function (event) {
            this.setState({[fieldName]: event.target.value});
        }
    }

    handleSubmit(event) {
        alert('A username was submitted: ' + event.target.userName);
        request
            .post('http://10.36.16.229:3000/users')
            .set('Content-Type', 'application/raw')
            .send({ username: this.state.userName,
                    password: this.state.password})
            .end(function(err, res){
                alert(res.text);
            });
        event.preventDefault();
    }

    render() {
        return (
            <div className='Login-page'>
                <form>
                    <label>
                        Username: <input type="text" value={this.state.userName} name="userName"
                                         onChange={this.onFieldChange('userName').bind(this)}/>
                    </label><br/>
                    <label>
                        Password: <input type="text" value={this.state.password} name="password"
                                         onChange={this.onFieldChange('password').bind(this)}/>
                    </label><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }

}

export default Login;