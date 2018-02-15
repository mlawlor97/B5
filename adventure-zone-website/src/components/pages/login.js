import React, {Component} from 'react';


class Login extends Component {
    // let SERVER_IP = '10.36.16.229:3000';

    constructor() {
        super();
        this.state = {userName: '', password: ''};

        // this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onFieldChange(fieldName) {
        return function (event) {
            this.setState({[fieldName]: event.target.value});
        }
    }

    handleSubmit(event) {
        alert('A username was submitted: ' + event.target.userName);
        console.log(this.state.userName + "  " + this.state.password);

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