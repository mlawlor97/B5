import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom';
import homePage from '../components/pages/homePage';
import Login from '../components/pages/login';
import Contact from '../components/pages/contact';

it('Homepage matches', () => {
    const Homepage = renderer.create(
        <StaticRouter location="/Homepage" context={homePage}>
            <Link to="/Homepage" />
        </StaticRouter>
    );

    let tree = Homepage.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Login matches', () => {
    const Log_in = renderer.create(
        <StaticRouter location="/Login" context={Login}>
            <Link to="/Login" />
        </StaticRouter>
    );

    let tree = Log_in.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Contact matches', () => {
    const Contacts = renderer.create(
        <StaticRouter location="/Contact" context={Contact}>
            <Link to="/Homepage" />
        </StaticRouter>
    );

    let tree = Contacts.toJSON();
    expect(tree).toMatchSnapshot();
});