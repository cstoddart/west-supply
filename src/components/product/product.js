import React, { Component } from 'react';

import { shopifyClient } from '../../shopifyClient';
import {
  StyledProduct,
  Left,
  Right,
} from './productStyles';

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
      <StyledProduct>
        <Left>
          <img style={{ width: '100%' }} src={this.state.images[0].src} />
        </Left>
        <Right>
          <h1>{this.state.title}</h1>
          <p>{this.state.description}</p>
          <h3>{this.state.variants[0].price}</h3>
        </Right>
      </StyledProduct>
    );
  }
}
