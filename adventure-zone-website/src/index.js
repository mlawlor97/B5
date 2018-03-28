import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pong from './Games/Pong';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Pong />, document.getElementById('root'));
registerServiceWorker();
