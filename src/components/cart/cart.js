import React, { Component, Fragment } from 'react';

import { getCart, removeFromCart } from '../../services/shopify';
import { context } from '../../context';

export class Cart extends Component {
  static contextType = context;

  componentDidMount() {
    getCart(this.context);
  }

  render() {
    const lineItems = this.context.checkout.lineItems || [];
    return (
      <div>
        Cart
        <h1>${this.context.checkout.totalPrice}</h1>
        {lineItems.map((lineItem) => (
          <Fragment key={lineItem.id}>
            <h2>{lineItem.title}</h2>
            <p>x{lineItem.quantity}</p>
            <p>${lineItem.variant.price}</p>
            <button onClick={() => removeFromCart([lineItem.id], this.context)}>Remove</button>
          </Fragment>
        ))}
        <button onClick={() => window.open(this.context.checkout.webUrl)}>Proceed To Checkout</button>
      </div>
    );
  }
}
