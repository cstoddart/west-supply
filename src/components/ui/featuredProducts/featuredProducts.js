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
    initialX: undefined,
    translation: 0,
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
          () => this.setState({ animating: false, translation: 0, initialX: undefined }, resolve),
          300
        )
      ))
    ))
  );

  changeFeaturedProduct = async ({ arrayIndex, productIndex, productHandle }) => {
    if (this.state.animating) return;
    this.setState({ activeIndex: productIndex });
    const length = this.state.featuredProducts.length;
    if (arrayIndex === 2) await this.animate('rightTwo');
    if (arrayIndex === 3) await this.animate('right');
    if (arrayIndex === 4) this.props.history.push(`/products/${productHandle}`)
    if (arrayIndex === 5) await this.animate('left');
    if (arrayIndex === 6) await this.animate('leftTwo');
    this.setDisplayedProducts(((productIndex + length) - 4) % length);
  };

  handleTouchStart = (event) => this.setState({ initialX: event.touches[0].pageX });

  handleTouchMove = (event) => {
    if (!this.state.initialX) return;
    const translation = event.touches[0].pageX - this.state.initialX;
    this.setState({ translation });
    if (translation < -100) {
      this.changeFeaturedProduct({
        arrayIndex: 5,
        productIndex: this.state.displayedProducts[5].index,
        productHandle: this.state.displayedProducts[5].handle,
      });
      this.setState({
        initialX: undefined,
        translation: 0,
      });
    } else if (translation > 100) {
      this.changeFeaturedProduct({
        arrayIndex: 3,
        productIndex: this.state.displayedProducts[3].index,
        productHandle: this.state.displayedProducts[3].handle,
      });
      this.setState({
        initialX: undefined,
        translation: 0,
      });
    }
  }

  handleTouchEnd = () => this.setState({
    initialX: undefined,
    translation: 0,
  });

  render() {
    return (
      <StyledFeaturedProducts>
        {this.state.displayedProducts.map((product, index) => (
          <FeaturedProduct
            key={`${product.id}-${index}`}
            onClick={() => this.changeFeaturedProduct({
              arrayIndex: index,
              productIndex: product.index,
              productHandle: product.handle,
            })}
            animating={this.state.animating}
            active={product.index === this.state.activeIndex}
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
            translation={this.state.translation}
          >
            <FeaturedProductImage src={product.images[0].src} />
            <FeaturedProductTitle>
              {product.title}
              <FeaturedProductLink to={`/products/${product.handle}`}>Learn More</FeaturedProductLink>
            </FeaturedProductTitle>
          </FeaturedProduct>
        ))}
      </StyledFeaturedProducts>
    );
  }
}
