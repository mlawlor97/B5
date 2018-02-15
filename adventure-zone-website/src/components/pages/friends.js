import React, {Component} from 'react';
import './../../App.css';

class friends extends Component {

    constructor() {
        super();
        this.friendList = [
            {
                name: 'Bradley',
                status: 2
            },
            {
                name: 'Steve',
                status: 0
            },
            {
                name: 'Nathan',
                status: 2
            }
        ];
    }

    render() {
        return (

            <div className="Friends-list">
                <h2><b>FRIENDS</b></h2>
                {this.friendList.map((friend) => {
                    return (
                        <div className="Friend">
                            <div className="friend-name">
                                {friend.name}
                            </div>
                            <div className="friend-status">
                                {friend.status}         {/*will change to colored dots to represent status*/}
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
