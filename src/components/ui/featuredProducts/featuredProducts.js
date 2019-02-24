import React, { Component } from 'react';

import { context } from '../../../context';
import {
  StyledFeaturedProducts,
  FeaturedProduct,
  FeaturedProductImage,
  FeaturedProductTitle,
  FeaturedProductLink,
} from './featuredProductsStyles';

export class FeaturedProducts extends Component {
  static contextType = context;

  state = {
    featuredProducts: [],
    displayedProducts: [],
    activeIndex: 4,
    animating: false,
  };

  componentDidUpdate() {
    if (this.context.products.length && !this.state.featuredProducts.length) {
      const products = [...this.context.products] || [];
      while(products.length < 5) products.push(...this.context.products);
      const featuredProducts = products.map((product, index) => ({
        ...product,
        index,
      }));
      this.setState({ featuredProducts }, () => this.setDisplayedProducts(0));
    }
  }

  setDisplayedProducts = (startingIndex) => {
    const { featuredProducts } = this.state;
    const displayedProducts = [];
    for (let index = 0; index < 9; index++) {
      displayedProducts.push(featuredProducts[(index + startingIndex) % featuredProducts.length])
    }
    this.setState({ displayedProducts });
  };

  animate = (direction) => (
    new Promise((resolve) => (
      this.setState({ animating: direction }, () => (
        setTimeout(
          () => this.setState({ animating: false }, resolve),
          300
        )
      ))
    ))
  );

  changeFocus = async (productIndex, arrayIndex) => {
    if (this.state.animating) return;
    this.setState({ activeIndex: productIndex });
    const length = this.state.featuredProducts.length;
    if (arrayIndex === 2) await this.animate('rightTwo');
    if (arrayIndex === 3) await this.animate('right');
    if (arrayIndex === 5) await this.animate('left');
    if (arrayIndex === 6) await this.animate('leftTwo');
    this.setDisplayedProducts(((productIndex + length) - 4) % length);
  };

  render() {
    console.count('RENDER');
    return (
      <StyledFeaturedProducts>
        {this.state.displayedProducts.map((product, index) => (
          <FeaturedProduct
            key={`${product.id}-${index}`}
            onClick={() => this.changeFocus(product.index, index)}
            animating={this.state.animating}
            active={product.index === this.state.activeIndex}
          >
            <FeaturedProductImage src={product.images[0].src} />
            <FeaturedProductTitle>
              {product.index} - {product.title}
              <FeaturedProductLink href={`#${product.handle}`}>Learn More</FeaturedProductLink>
            </FeaturedProductTitle>
          </FeaturedProduct>
        ))}
      </StyledFeaturedProducts>
    );
  }
}
