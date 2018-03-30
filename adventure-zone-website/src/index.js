import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Blackjack from './Games/blackjack';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Blackjack />, document.getElementById('root'));
registerServiceWorker();
