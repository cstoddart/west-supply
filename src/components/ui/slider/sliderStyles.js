import styled, { keyframes } from 'styled-components';

import { siteWidth } from '../../../constants';
import { Button } from '../button';

const toRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const fromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;


const toLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const fromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const StyledSlider = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
`;

export const SlideContainer = styled.div`
  max-width: ${siteWidth * 0.95};
  overflow: hidden;
`;

export const CurrentSlide = styled.div``;

export const ExitingSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation: 0.7s ${({ direction }) => direction === 'forward' ? toLeft : toRight} ease-out;
`;

export const IncomingSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation: 0.7s ${({ direction }) => direction === 'forward' ? fromRight : fromLeft} ease-out;
`;

export const SliderControls = styled.div`
  position: absolute;
  bottom: 10px;
  right: -5px;
  display: flex;
  z-index: 1;

  & > *:not(:last-of-type) {
    margin-right: 5px;
  }
`;

const SliderControl = styled.div`
  background-color: black;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
`;

export const LeftArrow = styled(SliderControl)`
  left: 0;
`;

export const RightArrow = styled(SliderControl)`
  right: 0;
`;

export const StyledSlide = styled.div``;

export const StyledSlideImage = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  height: 650px;
  width: 100%;
`;

export const StyledSlideContent = styled.div`
  background-color: rgba(255,255,255,0.75);
  position: absolute;
  top: 100px;
  left: 0;
  padding: 50px 35px 10px 50px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledSlideTitle = styled.h1`
  font-size: 22px;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 15px;
  padding-bottom: 5px;
  letter-spacing: 1px;

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    height: 3px;
    width: 50px;
    background-color: black;
    border-radius: 3px;
  }
`;

export const StyledSlideText = styled.p`
  margin-bottom: 5px;
`;

export const StyledSlideButton = styled(Button)`
  margin-left: auto;
  position: relative;
  left: 40px;
`;
