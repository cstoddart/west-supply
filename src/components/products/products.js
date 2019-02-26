import React, { Component } from 'react';

import { shopifyClient } from '../../shopifyClient';
import leatherwork2 from '../../assets/images/leatherwork2.jpg';
import {
  StyledProducts,
  ProductsImage,
  Product,
  ProductTitle,
  ProductDescription,
  ProductLink,
} from './productsStyles';

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
      <StyledProducts>
        <ProductsImage imageSource={leatherwork2} />
        {this.state.products.map((product) => (
          <Product key={product.id}>
            <img style={{ width: '100%' }} src={product.images[0].src} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductLink to={`/products/${product.handle}`}>Buy Now</ProductLink>
          </Product>
        ))}
      </StyledProducts>
    );
  }
}
