import React, { Component } from 'react';

import { getProducts } from '../../services/shopify';
import { context } from '../../context';
import { Product } from '../ui';

export class Home extends Component {
  static contextType = context;

  async componentDidMount() {
    const products = await getProducts();
    this.context.updateContext({ products });
  }

  render() {
    return (
      <div>
        Boats N Hoes
        {this.context.products.map((product) => (
          <Product productId={product.id} />
        ))}
      </div>
    );
  }
}
