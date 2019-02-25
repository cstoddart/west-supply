import React, { Component } from 'react';

import { getProducts } from '../../services/shopify';
import { context } from '../../context';
import {
  FeaturedProducts,
  SectionHeader,
} from '../ui';
import { HomePageSlider } from './homePageSlider';
import { HomePageStories } from './homePageStories';

export class Home extends Component {
  static contextType = context;

  componentDidMount() {
    getProducts(this.context);
  }

  render() {
    return (
      <div>
        <HomePageSlider />
        <SectionHeader>The kind of tools that become a part of your everyday.</SectionHeader>
        <FeaturedProducts history={this.props.history} />
        <SectionHeader>The moments, people, and places that inspire us.</SectionHeader>
        <HomePageStories />
      </div>
    );
  }
}
