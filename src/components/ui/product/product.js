import React, { Component } from 'react';

import { context } from '../../../context';

export class Product extends Component { 
  static contextType = context;

  render() {
    const product = this.context.products.find((product) => product.id === this.props.productId);
    console.log('PRODUCT', product);

    return (
      <div>
        <img src={product.images[0].src} height={350} />
        <h1>{product.title}</h1>
        <h3>${product.variants[0].price}</h3>
        <p>{product.description}</p>
      </div>
    )
  }
}
