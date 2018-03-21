import React from 'react';
import ReactDOM from 'react-dom';
import Games from '../../components/pages/games';

describe('Games', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Games />, div);
    });
});