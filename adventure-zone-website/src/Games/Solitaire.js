import React, {Component} from 'react';

class Solitaire extends Component {

    constructor() {
        super();

        this.state.Leaders = [];
        this.getLeaders();
    }

    state = {
        Leaders: []
    };

    getLeaders = async () => {
        let theBest = [];

        let ip = 'proj-319-B5.cs.iastate.edu';
        // let ip = '10.36.19.28';

        const response = await fetch('http://' + ip + ':3000/api/leaderboard?game=Checkers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).catch(function (error) {
            console.log(error);
        });

        const message = await response.json();

        let leader = JSON.parse(JSON.stringify(await message));
        for (let i = 0; i < leader.length; i++) {
            theBest.push({name: leader[i]['Username'], score: leader[i]['Score']});
        }

        this.setState({
            Leaders: theBest
        })
    };

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
                                {/*might change to colored dots to represent status*/}
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
