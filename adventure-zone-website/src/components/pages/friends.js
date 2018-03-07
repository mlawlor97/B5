import React, {Component} from 'react';
import {User} from "../UserFile";

class friends extends Component {

    constructor() {
        super();
        this.fetchFriends();
    }

    state = {
        friendList: []
    }

    fetchFriends = async () => {
        let friendsList = [];

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
            friendsList.push(friendNames[i]['Name']);
        }

        this.setState({
            friendList: friendsList
        })

        return 42;
    };

    render() {
        return (

            <div className="Friends-list">
                <h2><b>FRIENDS</b></h2>
                {this.state.friendList.map((friend) => {
                    return (
                        <div key={friend} className="Friend">
                            <div className="friend-name">
                                {friend}
                            </div>
                            <div className="friend-status">
                                {friend.status}         {/*might change to colored dots to represent status*/}
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
