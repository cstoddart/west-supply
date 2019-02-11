import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo.svg';
import {
  StyledNavigation,
  Logo,
  Left,
  Right,
} from './navigationStyles';

export class Navigation extends Component {
  render() {
    return (
      <StyledNavigation>
        <Left>
          <Link to="/">Home</Link>
          <Link to="/">Shop</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </Left>
        <Logo src={logo} />
        <Right>
          <Link to="/cart">Cart</Link>
        </Right>
      </StyledNavigation>
    );
  }
}
