import React, {Component} from 'react';
import {User} from "../components/UserFile";

class Solitaire extends Component {

    constructor() {
        super();

        this.state.Leaders = [];
        // this.getLeaders();
    }

    state = {
        Leaders: []
    };

    // getLeaders = async () => {
    //     let theBest = [];
    //
    //     const response = await fetch('http://' + User.getip + ':3000/api/leaderboard?game=Solitaire', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     }).catch(function (error) {
    //         console.log(error);
    //     });
    //
    //     const message = await response.json();
    //
    //     let leader = JSON.parse(JSON.stringify(await message));
    //     for (let i = 0; i < leader.length; i++) {
    //         theBest.push({name: leader[i]['Username'], score: leader[i]['Score']});
    //     }
    //
    //     this.setState({
    //         Leaders: theBest
    //     })
    // };

    render() {
        return (
            <div className="Friends-list">
                <h2><b>Leaders</b></h2>
                {this.state.Leaders.map((user) => {
                    return (
                        // {renderRedirect()}
                        <div key={user.name} className="Friend" onClick={() => this.setRedirect()}>
                            {/*{this.renderRedirect()}*/}
                            <div className="friend-name">
                                {user.name}
                            </div>
                            <div className="friend-status">
                                {user.score}
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

export default Solitaire;
