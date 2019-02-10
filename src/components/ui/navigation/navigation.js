import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo.svg';
import {
  StyledNavigation,
  Logo,
} from './navigationStyles';

export class Navigation extends Component {
  render() {
    return (
      <StyledNavigation>
        <Left>
          <Link to="/">Home</Link>
        </Left>
        <Logo src={logo} />
        <Right>
        </Right>
        <Link to="/cart">Cart</Link>
      </StyledNavigation>
    );
  }
}
