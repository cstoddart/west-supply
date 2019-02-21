import React, { Component } from 'react';

import { context } from '../../../context';
import {
  StyledFeaturedProducts,
  FeaturedProduct,
} from './featuredProductsStyles';

export class FeaturedProducts extends Component {
  static contextType = context;

  state = {
    featuredProducts: [],
    displayedProducts: [],
    currentIndex: 0,
    animating: false,
  };

  componentDidUpdate() {
    if (this.context.products.length && !this.state.featuredProducts.length) {
      const products = [
        ...this.context.products,
        ...this.context.products,
        ...this.context.products,
      ] || []; // only needed because I currently don't have at least 5 items in Shopify
      const featuredProducts = products.map((product, index) => ({
        ...product,
        index,
      }));
      this.setState({ featuredProducts }, () => this.setDisplayedProducts(0));
    }
  }

  setDisplayedProducts = (startingIndex) => {
    const { featuredProducts } = this.state;
    const array = [0,1,2,3,4,5,6,7,8];
    const displayedProducts = array.map((index) => featuredProducts[(index + startingIndex) % featuredProducts.length]);
    this.setState({ displayedProducts });
  };

  animate = (direction) => (
    new Promise((resolve) => (
      this.setState({ animating: direction }, () => (
        setTimeout(
          () => this.setState({ animating: false }, resolve),
          700
        )
      ))
    ))
  );

  changeFocus = async (productIndex, arrayIndex) => {
    const length = this.state.featuredProducts.length;
    if (this.state.animating) return;
    if (arrayIndex === 2) await this.animate('rightTwo');
    if (arrayIndex === 3) await this.animate('right');
    if (arrayIndex === 5) await this.animate('left');
    if (arrayIndex === 6) await this.animate('leftTwo');  
    this.setDisplayedProducts(((productIndex + length) - 4) % length);
  };

  render() {
    return (
      <StyledFeaturedProducts>
        {this.state.displayedProducts.map((product, index) => (
          <FeaturedProduct
            key={`${product.id}-${index}`}
            imageSource={product.images[0].src}
            onClick={() => this.changeFocus(product.index, index)}
            animating={this.state.animating}
          >
            {product.index}
          </FeaturedProduct>
        ))}
      </StyledFeaturedProducts>
    );
  }
}
