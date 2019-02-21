import React, { Component } from 'react';

import {
  StyledSlider,
  SlideContainer,
  CurrentSlide,
  ExitingSlide,
  IncomingSlide,
  SliderControls,
  LeftArrow,
  RightArrow,
  StyledSlide,
  StyledSlideImage,
  StyledSlideContent,
  StyledSlideTitle,
  StyledSlideText,
  StyledSlideButton,
} from './sliderStyles';

export class Slider extends Component {
  state = {
    currentSlideIndex: 0,
    currentSlide: this.props.children[0],
    incomingSlide: undefined,
    slideDirection: 'forward',
    isSliding: false,
  };

  nextSlide = () => {
    if (this.state.isSliding) return;
    const currentSlideIndex = this.props.children[this.state.currentSlideIndex + 1]
      ? this.state.currentSlideIndex + 1
      : 0;
    const incomingSlide = this.props.children[currentSlideIndex];
    const exitingSlide = this.state.currentSlide;
    this.setState({
      currentSlide: undefined,
      exitingSlide,
      incomingSlide,
      slideDirection: 'forward',
      isSliding: true,
    }, () => setTimeout(() => this.setState((state) => ({
      currentSlideIndex,
      currentSlide: state.incomingSlide,
      exitingSlide: undefined,
      incomingSlide: undefined,
      isSliding: false,
    })), 700));
  }
  
  previousSlide = () => {
    if (this.state.isSliding) return;
    const currentSlideIndex = this.props.children[this.state.currentSlideIndex - 1]
      ? this.state.currentSlideIndex - 1
      : this.props.children.length - 1;
    const incomingSlide = this.props.children[currentSlideIndex];
    const exitingSlide = this.state.currentSlide;
    this.setState({
      currentSlide: undefined,
      exitingSlide,
      incomingSlide,
      slideDirection: 'backward',
      isSliding: true,
    }, () => setTimeout(() => this.setState((state) => ({
      currentSlideIndex,
      currentSlide: state.incomingSlide,
      exitingSlide: undefined,
      incomingSlide: undefined,
      isSliding: false,
    })), 700));
  }

  render() {
    return (
      <StyledSlider>
        <SlideContainer>
          { this.state.exitingSlide && <ExitingSlide direction={this.state.slideDirection}>{this.state.exitingSlide}</ExitingSlide>}
          { this.state.currentSlide && <CurrentSlide>{this.state.currentSlide}</CurrentSlide>}
          { this.state.incomingSlide && <IncomingSlide direction={this.state.slideDirection}>{this.state.incomingSlide}</IncomingSlide>}
        </SlideContainer>
        <SliderControls>
          <LeftArrow onClick={this.previousSlide}>{`<`}</LeftArrow>
          <RightArrow onClick={this.nextSlide}>{`>`}</RightArrow>
        </SliderControls>
      </StyledSlider>
    );
  }
}

export const Slide = ({ children }) => (
  <StyledSlide>
    {children}
  </StyledSlide>
);

export const SlideImage = ({ src }) => (
  <StyledSlideImage image={src} />
);

export const SlideContent = ({ children }) => (
  <StyledSlideContent>
    {children}
  </StyledSlideContent>
);

export const SlideTitle = ({ children }) => (
  <StyledSlideTitle>
    {children}
  </StyledSlideTitle>
);

export const SlideText = ({ children }) => (
  <StyledSlideText>
    {children}
  </StyledSlideText>
);

export const SlideButton = ({ to, children }) => (
  <StyledSlideButton to={to}>
    {children}
  </StyledSlideButton>
)
