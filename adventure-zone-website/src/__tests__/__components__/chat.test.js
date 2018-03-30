import React from 'react';
import ReactDOM from 'react-dom';
import Chat from '../../components/pages/chat';

describe('Games', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Chat />, div);
    });
});

// describe('Chat', () => {
//     it('can chat with test', () => {
//         const div = document.
//     }