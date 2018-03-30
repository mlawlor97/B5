import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pong from './Games/pong';
import Tetris from './Games/Tetris'
import Snake from './Games/Snake'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// import Blackjack from './Games/blackjack';
// import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
