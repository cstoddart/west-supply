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
  MobileNavigation,
  MobileNavigationIcon,
} from './navigationStyles';

export class Navigation extends Component {
  state = {
    showMobileNavigation: false,
  };

  toggleMobileNavigation = () => this.setState((state) => ({ showMobileNavigation: !state.showMobileNavigation }));
  
  hideMobileNavigation = () => this.setState({ showMobileNavigation: false });

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
        <MobileNavigationIcon
          onClick={this.toggleMobileNavigation}
          active={this.state.showMobileNavigation}
        />
        {this.state.showMobileNavigation &&
          <MobileNavigation>
            <NavigationLink to="/" onClick={this.hideMobileNavigation}>
              Home
            </NavigationLink>
            <NavigationLink to="/products" onClick={this.hideMobileNavigation}>
              Shop
            </NavigationLink>
            <NavigationLink to="/" onClick={this.hideMobileNavigation}>
              About
            </NavigationLink>
            <NavigationLink to="/" onClick={this.hideMobileNavigation}>
              Contact
            </NavigationLink>
            <NavigationLink to="/cart" onClick={this.hideMobileNavigation}>
              <ShoppingCartIcon src={shoppingCart} />Cart
            </NavigationLink> 
          </MobileNavigation>
        }
      </StyledNavigation>
    );
  }
}
