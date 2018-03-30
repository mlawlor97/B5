import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pong from './Games/pong';
import Tetris from './Games/Tetris'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Tetris />, document.getElementById('root'));
registerServiceWorker();
