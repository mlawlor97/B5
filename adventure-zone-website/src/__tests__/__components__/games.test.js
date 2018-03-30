import React from 'react';
import ReactDOM from 'react-dom';
import Games from '../../components/pages/games';
import { shallow } from 'enzyme';
import Button from '../../components/pages/games';

describe('Games', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Games />, div);
    });
});

describe('Test Button component', () => {
    it('Test click event', () => {
        const mockCallBack = jest.fn();

        const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});