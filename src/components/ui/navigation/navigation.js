import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navigation extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    );
  }
}
