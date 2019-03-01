import React, { Component } from 'react';

import { context } from '../../context';
import { shopifyClient } from '../../shopifyClient';
import { addToCart } from '../../services/shopify';
import {
  StyledProduct,
  Left,
  Right,
  AddToCartButton,
} from './productStyles';

export class Product extends Component {
  static contextType = context;

  state = {
    id: '',
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
      id: product.id,
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
          <AddToCartButton onClick={() => addToCart(this.state.id, this.context)}>Add To Cart</AddToCartButton>
        </Right>
      </StyledProduct>
    );
  }
}
