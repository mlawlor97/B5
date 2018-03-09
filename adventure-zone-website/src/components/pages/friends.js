import React, {Component} from 'react';
import fetch from 'node-fetch';
import {User} from '../UserFile';
import {Redirect} from 'react-router-dom';

class friends extends Component {

    constructor() {
        super();
        this.fetchFriends();
        this.state.redirect = false;
    }

    state = {
        friendList: [],
        redirect: false,
        friend: ''
    }

    fetchFriends = async () => {
        if (User.name === '') { return; }
        let friendsList = [];

        let ip = 'proj-319-B5.cs.iastate.edu';
        // let ip = '10.36.19.28';

        const response = await fetch('http://' + ip + ':3000/api/friends?username=' + User.name, {
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
            // friendsList.push({name: friendNames[i]['Friend'], status: friendNames[i]['isActv']});
            friendsList.push({name: friendNames[i]['Friend'], status: 'offline'});
        }

        this.setState({
            friendList: friendsList
        })

        return 42;
    };

    addFriend = async () => {
        if (User.name === '' || this.state.friend === '') { return; }

        let ip = 'proj-319-B5.cs.iastate.edu';
        // let ip = '10.36.19.28';

        let data = {
            username: User.name,
            friend: this.state.friend
        };

        const response = await fetch('http://' + ip + ':3000/api/friends', {
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
        alert(JSON.stringify(message));

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

    // renderPopup = () => {
    //
    // };

    render() {
        return (

            <div className="Friends-list">
                <h2><b>FRIENDS</b>
                    <button onClick={() => this.addFriend()}>+</button>
                </h2>
                <input type='text' placeholder={'Look for:'} name={'friend'}
                       onChange={this.onFieldChange('friend').bind(this)}/>
                {this.state.friendList.map((friend) => {
                    return (
                        // {renderRedirect()}
                        <div key={friend.name} className="Friend" onClick={() => this.setRedirect()}>
                            {this.renderRedirect()}
                            <div className="friend-name">
                                {friend.name}
                            </div>
                            <div className="friend-status">
                                {/*might change to colored dots to represent status*/}
                                {friend.status}
                            </div>
                            <hr/>
                        </div>
                    );
                })}
                <hr/>
            </div>

        );
    }
}

export default friends;
