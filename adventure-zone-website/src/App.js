import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponenet/footer';
import Homepage from './components/pages/homePage';
import Contact from './components/pages/contact';
import Login from './components/pages/login';
import Chat from './components/pages/chat';
import Checkers from './Games/Checkers';
import Solitaire from './Games/Solitaire';
import Pong from './Games/pong';
import Tetris from './Games/Tetris';
import Snake from './Games/Snake';

//includes
import './Assets/css/default.min.css';

class App extends Component {
    render() {
        return (
            <Router>
            <div className="App">
                <Header/>

                <Route exact path='/' component={Login} />
                <Route exact path='/Homepage' component={Homepage} />
                <Route exact path='/Contact' component={Contact} />
                <Route exact path='/Chat' component={Chat} />
                <Route exact path='/Checkers' component={Checkers} />
                <Route exact path='/Solitaire' component={Solitaire} />
                <Route exact path='/Pong' component={Pong} />
                <Route exact path='/Tetris' component={Tetris} />
                <Route exact path='/Snake' component={Snake} />

                <Footer/>
            </div>
            </Router>
        );
    }
}

export default App;
