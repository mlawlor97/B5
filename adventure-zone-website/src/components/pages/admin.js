import React, {Component} from 'react';
import {User} from "../UserFile";

class Admin extends Component {

    constructor() {
        super();

        this.getUsers();
    }

    state = {
      allUsers: []
    };

    getUsers = async () => {
        let users = [];

        this.setState({
            allUsers: users
        });

        const response = await fetch('http://' + User.getip + ':3000/api/admin/users' + '?username=' + User.name, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }).catch(function (error) {
            console.log(error);
        });

        const message = await response.json();

        if (response.status === 200) {
            let usersList = JSON.parse(JSON.stringify(await message));
            for (let i = 0; i < usersList.length; i++) {
                if (usersList[i].TypePA === 'A') {
                    users.push({name: usersList[i].Username, admin: 'Admin', banned: usersList[i].Banned, index: i});
                } else {
                    users.push({name: usersList[i].Username, admin: 'Player', banned: usersList[i].Banned, index: i});
                }
            }
        }

        this.setState({
            allUsers: users
        });
    };

    banUser = async (props) => {
        const response = await fetch('http://' + User.getip + ':3000/api/admin/banuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({username: props.name})
        }).catch(function (error) {
            console.log(error);
        });

        if (response.status === 200) {
            this.state.allUsers[props.index].banned = 1;
            this.forceUpdate();
        }
    };

    unbanUser = async (props) => {
        const response = await fetch('http://' + User.getip + ':3000/api/admin/unbanuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({username: props.name})
        }).catch(function (error) {
            console.log(error);
        });

        if (response.status === 200) {
            this.state.allUsers[props.index].banned = 0;
            this.forceUpdate();
        }
    };

    deleteUser = async (props) => {
        const response = await fetch('http://' + User.getip + ':3000/api/admin/deleteuser', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({username: props})
        }).catch(function (error) {
            console.log(error);
        });

        if (response.status === 200) {
            this.getUsers();
            this.forceUpdate();
        }
    };

    getBanButton(props) {
        if (props.banned === 1) {
            return (<button onClick={() => {this.unbanUser(props)}}>UNBAN</button>);
        } else {
            return (<button onClick={() => {this.banUser(props)}}>BAN</button>);
        }
    }

    render() {
        return (
            <div>
                {this.state.allUsers.map((user) => {
                    return (
                        <div key={user.name}>
                            <b>{user.name}  --  </b>
                            <b>{user.admin}  --  </b>
                            {this.getBanButton(user)}
                            <button onClick={() => {this.deleteUser(user.name)}}>DELETE</button>
                        </div>
                    );
                })}
            </div>
        );
    }

}

export default Admin;