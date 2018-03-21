import React from 'react';
import ReactDOM from 'react-dom';
import Contact from '../../components/pages/contact';

describe('Contact', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Contact />, div);
    });
});