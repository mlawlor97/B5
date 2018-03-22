import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';

class games extends Component {

    constructor() {
        super();

        this.fetchGames();

        this.state.redirect = false;
        this.state.page = '/';
    }

    state = {
        gameList: [],
        redirect: false,
        page: '/'
    };

    fetchGames = async () => {
        let gamesList = [];
        let ip = 'proj-319-B5.cs.iastate.edu';
        // let ip = '10.26.75.147';

        const response = await fetch('http://' + ip + ':3000/api/games', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        const message = await response.json();
        let gameNames = JSON.parse(JSON.stringify(await message));
        for (let i = 0; i < gameNames.length; i++) {
            gamesList.push(gameNames[i]['Name']);
        }

        this.setState({
            gameList: gamesList
        });

        return gamesList;
    };

    setRedirect = (name) => {
        this.setState({
            redirect: true,
            page: '/' + name
        });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={this.state.page}/>
        }
    };

    render() {

        return (

            <div className="Game-list">
                <h2><b>GAMES</b></h2>
                <hr/>
                <br/>
                <div className="grid-container">
                    {this.state.gameList.map((game) => {
                        return ( <div key={game}>
                            {this.renderRedirect()}
                            <button onClick={() => this.setRedirect(game)} type="button" className="grid-item"/>
                            <p color="white">{game}</p>
                        </div>);
                    })}
                </div>

            </div>

        );
    }
}

export default games;
