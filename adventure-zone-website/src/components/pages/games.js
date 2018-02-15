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
                icon: 'Solitaire.png'
            },
            {
                title: 'Checkers',
                icon: 'Checkers.png'
            },
            {
                title: 'Chess',
                icon: 'Chess.png'
            },
            {
                title: 'Connect-Four',
                icon: 'Connect-Four.png'
            }
        ];
    }

    render() {

        return (

            <div className="Game-list">
                <h2><b>GAMES</b></h2>

                <div className="grid-container">
                    {this.gameList.map((game) => {
                        return ( <div key={game.title}>
                            <button type="button" className="grid-item"/>
                            <p color="white">{game.title}</p>
                        </div>);
                    })}
                </div>


            </div>

        );
    }
}

export default games;
