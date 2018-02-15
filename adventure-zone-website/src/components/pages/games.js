import React, {Component} from 'react';
import './../../App.css';

class games extends Component {

    constructor() {
        super();

        // let gameList;       //list of playable games

        // getGames() {}    //will get from database later

        this.gameList = [
            {
                title: 'Solitaire',
                icon: 'jpeg'
            },
            {
                title: 'Checkers',
                icon: 'png'
            },
            {
                title: 'Chess',
                icon: 'nope'
            }
        ];
    }

    render() {

        return (

            <div className="Game-list">
                <h2><b>GAMES</b></h2>

                <div className="grid-container">
                    {this.gameList.map((game) => {
                        return ( <div className="grid-item">
                            {game.title}
                        </div> );
                    })}
                </div>


            </div>

        );
    }
}

export default games;
