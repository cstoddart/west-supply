import React, { Component } from 'react';

import logo from '../../../assets/images/logo.svg';
import shoppingCart from '../../../assets/images/shoppingCart.svg';
import {
  StyledNavigation,
  NavigationLink,
  Logo,
  Left,
  Right,
  ShoppingCartIcon,
} from './navigationStyles';

export class Navigation extends Component {
  render() {
    return (
      <StyledNavigation>
        <Left>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/products">Shop</NavigationLink>
          <NavigationLink to="/">About</NavigationLink>
          <NavigationLink to="/">Contact</NavigationLink>
        </Left>
        <NavigationLink to="/">
          <Logo src={logo} />
        </NavigationLink>
        <Right>
          <NavigationLink to="/cart"><ShoppingCartIcon src={shoppingCart} />Cart</NavigationLink>
        </Right>
      </StyledNavigation>
    );
  }
}
