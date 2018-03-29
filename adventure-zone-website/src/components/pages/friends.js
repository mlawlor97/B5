import React, {Component} from 'react';
import fetch from 'node-fetch';
import {User} from '../UserFile';
import {Messages} from "../Messages";
import {Redirect} from 'react-router-dom';

class friends extends Component {

    componentDidMount() {
        this.timer = setInterval(() => {
            this.fetchFriends();
            this.forceUpdate();
        }, 30000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    constructor() {
        super();
        this.fetchFriends();
        this.state.redirect = false;
        this.changeFriends = false;
    }

    state = {
        friendList: [],
        redirect: false,
        friend: ''
    };

    fetchFriends = async () => {
        if (User.name === '') {
            return;
        }

        let friendsList = [];

        const response = await fetch('http://' + User.getip + ':3000/api/friends?username=' + User.name, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).catch(function (error) {
            console.log(error);
        });

        const message = await response.json();

        let friendNames = JSON.parse(JSON.stringify(await message));
        for (let i = 0; i < friendNames.length; i++) {
            var stat = '';
            if (friendNames[i]['isActv'] === 1) {
                stat = 'online'
            } else {
                stat = 'offline'
            }
            friendsList.push({name: friendNames[i]['Friend'], status: stat});
        }

        this.setState({
            friendList: friendsList
        });

        return 42;
    };

    deleteFriend = async (props) => {

        const response = await fetch('http://' + User.getip + ':3000/api/friends', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({username: User.name, friend: props})
        }).catch(function (error) {
            console.log(error);
        });

        const message = await response.json();
        console.log(JSON.stringify(message));

        this.fetchFriends();
    };

    addFriend = async () => {
        if (User.name === '' || this.state.friend === '') {
            return;
        }

        let data = {
            username: User.name,
            friend: this.state.friend
        };

        const response = await fetch('http://' + User.getip + ':3000/api/friends', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        }).catch(function (error) {
            console.log(error);
        });

        const message = await response.json();
        console.log(JSON.stringify(message));

        this.fetchFriends();

        return 42;
    };

    onFieldChange(fieldName) {
        return function (event) {
            this.setState({[fieldName]: event.target.value});
        }
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={'/Chat'}/>
        }
    };

    getEditButton() {
        if (this.changeFriends) {
            return (<div>DONE</div>);
        }
        return (<div>EDIT</div>)
    }

    getFriendTile(friend) {
        if (!this.changeFriends) {
            return (<div>
                {/*<button onClick={() => {this.deleteFriend(friend.name)}}>-</button>*/}
                {this.renderRedirect()}
                <div className="friend-name">
                    {friend.name}
                </div>
                <div className="friend-status">
                    {/*might change to colored dots to represent status*/}
                    {friend.status}
                </div>
                <hr/>
            </div>)
        }

        return (<div>
            {/*<button onClick={() => {this.deleteFriend(friend.name)}}>-</button>*/}
            {/*{this.renderRedirect()}*/}
            <div className="friend-name">
                {friend.name}
            </div>
            <div className="friend-status">
                {/*might change to colored dots to represent status*/}
                <button onClick={() => this.deleteFriend(friend.name)}>-</button>
            </div>
            <hr/>
        </div>)
    }


    render() {
        return (

            <div className="Friends-list">
                <h2><b>FRIENDS</b>
                </h2>
                <input type='text' placeholder={'Look for:'} name={'friend'}
                       onChange={this.onFieldChange('friend').bind(this)}/>
                <button onClick={() => this.addFriend()}>+</button>
                {this.state.friendList.map((friend) => {
                    return (
                        <div key={friend.name} className="Friend" onClick={() => {
                            Messages.other = friend.name;
                            if (!this.changeFriends) {this.setRedirect();}
                        }}>
                            {this.getFriendTile(friend)}
                        </div>
                    );
                })}
                <hr/>
                <button onClick={() => {
                    this.changeFriends = !this.changeFriends;
                    this.forceUpdate();
                }}>
                    {this.getEditButton()}
                </button>
            </div>

        );
    }
}

export default friends;
