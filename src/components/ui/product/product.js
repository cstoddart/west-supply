import React, { Component } from 'react';

import { addToCart } from '../../../services/shopify';
import { context } from '../../../context';

export class Product extends Component { 
  static contextType = context;

  render() {
    const product = this.context.products.find((product) => product.id === this.props.productId);
    return (
      <div>
        <img src={product.images[0].src} height={350} />
        <h1>{product.title}</h1>
        <h3>${product.variants[0].price}</h3>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product.variants[0].id, this.context)}>Add To Cart</button>
      </div>
    )
  }
}
