import React, { Component } from 'react';

import leatherwork1 from '../../../assets/images/leatherwork1.jpg';
import leatherwork2 from '../../../assets/images/leatherwork2.jpg';
import {
  Section,
  Slider,
  Slide,
  SlideImage,
  SlideContent,
  SlideTitle,
  SlideText,
  SlideButton,
} from '../../ui';

export class HomePageSlider extends Component { 
  render() {
    return (
      <Section>
        <Slider>
          <Slide>
            <SlideImage src={leatherwork1} />
            <SlideContent>
              <SlideTitle left>Timeless Style</SlideTitle>
              <SlideText>Lorem ipsum dolor amet blog twee wayfarers vaporware meggings typewriter subway tile hashtag tumblr biodiesel copper mug ugh.</SlideText>
              <SlideButton to="/">See Our Goods ></SlideButton>
            </SlideContent>
          </Slide>
          <Slide>
            <SlideImage src={leatherwork2} />
            <SlideContent>
              <SlideTitle left>Timeless Style</SlideTitle>
              <SlideText>Lorem ipsum dolor amet blog twee wayfarers vaporware meggings typewriter subway tile hashtag tumblr biodiesel copper mug ugh.</SlideText>
              <SlideButton to="/">See Our Goods ></SlideButton>
            </SlideContent>
          </Slide>
        </Slider>
      </Section>
    )
  }
}
