import React, { Component } from 'react';

import { shopifyClient } from '../../shopifyClient';

export class Product extends Component {
  state = {
    title: '',
    description: '',
    images: [{
      src: '',
    }],
    variants: [{
      price: '',
    }],
  };

  async componentDidMount() {
    const product = await shopifyClient.product.fetchByHandle(this.props.match.params.handle);
    if (!product) return console.log('ERROR @product.js');
    this.setState({
      title: product.title,
      description: product.description,
      images: product.images,
      variants: product.variants,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img style={{ width: '100%' }} src={this.state.images[0].src} />
        <p>{this.state.description}</p>
        <h3>{this.state.variants[0].price}</h3>
      </div>
    );
  }
}
