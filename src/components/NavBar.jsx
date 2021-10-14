import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/emma">Emma</Link>
        <Link to="/victoria">Victoria</Link>

        <NavLink
          to="/about"
          activeClassName="active"
          activeStyle={{ padding: '20px', color: 'red' }}
        >
          About NavLink
        </NavLink>
        <NavLink to="/emma" activeClassName="active">
          Emma NavLink
        </NavLink>
      </ul>
    );
  }
}
