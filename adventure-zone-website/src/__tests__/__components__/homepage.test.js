import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../../components/pages/homePage';

describe('HomePage', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HomePage />, div);
    });
});