import React, { Component } from 'react';

import { shopifyClient } from '../../shopifyClient';

export class Products extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const products = await shopifyClient.product.fetchAll();
    this.setState({ products });
  }

  render() {
    return (
      <div>
        {this.state.products.map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <img style={{ width: '100%' }} src={product.images[0].src} />
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
