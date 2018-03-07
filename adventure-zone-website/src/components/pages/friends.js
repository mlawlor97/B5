import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {User} from "../UserFile";

class friends extends Component {

    constructor() {
        super();
        this.fetchFriends();
        this.state.redirect = false;
    }

    state = {
        friendList: [],
        redirect: false
    }

    fetchFriends = async () => {
        let friendsList = [];
        // let friendsStatus = [];

        const response = await fetch('http://proj-319-B5.cs.iastate.edu:3000/api/friends?username=' + User.name, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        const message = await response.json();

        let friendNames = JSON.parse(JSON.stringify(await message));
        for (let i = 0; i < friendNames.length; i++) {
            // friendsList.push({name: friendNames[i]['Name'], status: friendNames[i]['Status']});
            friendsList.push({name: friendNames[i]['Name'], status: 'offline'});
        }

        this.setState({
            friendList: friendsList
        })

        return 42;
    };

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

    render() {
        return (

            <div className="Friends-list">
                <h2><b>FRIENDS</b></h2>
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
