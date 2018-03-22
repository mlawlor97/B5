import React from 'react';
import ReactDOM from 'react-dom';
import Friends from '../../components/pages/friends';

describe('Friends', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Friends />, div);
    });
});