import React, { Component } from 'react';

import { getProducts } from '../../services/shopify';
import { context } from '../../context';
import { Product } from '../ui';

export class Home extends Component {
  static contextType = context;

  componentDidMount() {
    getProducts(this.context);
  }

  render() {
    const products = this.context.products || [];
    return (
      <div>
        {products.map((product) => (
          <Product key={product.id} productId={product.id} />
        ))}
      </div>
    );
  }
}
