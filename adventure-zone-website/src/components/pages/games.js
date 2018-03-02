import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import fetch from 'node-fetch';

class games extends Component {


    constructor() {
        super();

        // let url = 'proj-319.cs.iastate.edu/games:3000';
        // let games;       //list of playable games

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

        // fetch(url)
        //     .then(function (response) {
        //         if(!response.ok) {
        //             console.error(response.status);
        //             throw Error(response.status);
        //         }
        //
        //         console.log(response);
        //
        //         return JSON.stringify(response);
        // });

        this.state.redirect = false
        this.state.page = '/'
    }

    state = {
        redirect: false,
        page: '/'
    }

    setRedirect = (name) => {
        this.setState({
            redirect: true,
            page: '/' + name
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={this.state.page}/>
        }
    }

    render() {

        return (

            <div className="Game-list">
                <h2><b>GAMES</b></h2>
                <hr/>
                <br/>
                <div className="grid-container">
                    {this.gameList.map((game) => {
                        return ( <div key={game.title}>
                            {this.renderRedirect()}
                            <button onClick={() => this.setRedirect(game.title)} type="button" className="grid-item"/>
                            <p color="white">{game.title}</p>
                        </div>);
                    })}
                </div>

            </div>

        );
    }
}

export default games;
