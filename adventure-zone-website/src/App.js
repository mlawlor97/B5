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
                <Route exact path='/solitaire' component={} />


                <Footer/>
            </div>
            </Router>
        );
    }
}

export default App;
