import React, { Component } from 'react';

import { getProducts } from '../../services/shopify';
import { context } from '../../context';
import leatherwork1 from '../../assets/images/leatherwork1.jpg';
import leatherwork2 from '../../assets/images/leatherwork2.jpg';
import {
  PageContainer,
  Product,
  Slider,
  Slide,
  SlideImage,
  SlideContent,
  SlideTitle,
  SlideText,
  SlideButton,
} from '../ui';

export class Home extends Component {
  static contextType = context;

  componentDidMount() {
    getProducts(this.context);
  }

  render() {
    const products = this.context.products || [];
    return (
      <PageContainer>
        <Slider>
          <Slide>
            <SlideImage src={leatherwork1} />
            <SlideContent>
              <SlideTitle>Timeless Style</SlideTitle>
              <SlideText>Lorem ipsum dolor amet blog twee wayfarers vaporware meggings typewriter subway tile hashtag tumblr biodiesel copper mug ugh.</SlideText>
              <SlideButton to="/">See Our Goods ></SlideButton>
            </SlideContent>
          </Slide>
          <Slide>
            <SlideImage src={leatherwork2} />
            <SlideContent>
              <SlideTitle>Timeless Style</SlideTitle>
              <SlideText>Lorem ipsum dolor amet blog twee wayfarers vaporware meggings typewriter subway tile hashtag tumblr biodiesel copper mug ugh.</SlideText>
              <SlideButton to="/">See Our Goods ></SlideButton>
            </SlideContent>
          </Slide>
        </Slider>
        <h2>Featured Items</h2>
        {products.map((product) => (
          <Product key={product.id} productId={product.id} />
        ))}
      </PageContainer>
    );
  }
}
