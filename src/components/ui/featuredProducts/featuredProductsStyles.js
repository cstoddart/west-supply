import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Section } from '../section'

export const StyledFeaturedProducts = styled(Section).attrs({
  fullWidth: true,
})`
  display: flex;
  align-items: flex-start;
  padding-bottom: 50px;
`;

export const FeaturedProduct = styled.div`
  min-width: 25%;
  max-width: 25%;
  transform: translateX(-250%);
  cursor: pointer;
  opacity: ${({ active }) => active ? 1 : 0.65};
  transition: left 0.3s ease-out;
  transition: ${({ active }) => !active && 'opacity 0.5s ease, left 0.3s ease-out'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  left: ${({ translation }) => translation}px;

  ${({ animating }) => animating === 'left' && `
    transition: transform 0.3s ease-out, left 0.3s ease-out, opacity 0.5s ease;
    transform: translateX(-350%);
  `}

  ${({ animating }) => animating === 'leftTwo' && `
    transition: transform 0.3s ease-out, left 0.3s ease-out, opacity 0.5s ease;
    transform: translateX(-450%);
  `}

  ${({ animating }) => animating === 'right' && `
    transition: transform 0.3s ease-out, left 0.3s ease-out, opacity 0.5s ease;
    transform: translateX(-150%);
  `}

  ${({ animating }) => animating === 'rightTwo' && `
    transition: transform 0.3s ease-out, left 0.3s ease-out, opacity 0.5s ease;
    transform: translateX(-50%);
  `}

  ${({ active, animating }) => active && animating && `
    ${FeaturedProductTitle} {
      transition: opacity 0.5s ease, left 0.3s ease-out, top 0.3s ease-out;
    }
  `}

  ${({ active }) => active && `
    ${FeaturedProductTitle} {
      opacity: 1;
      top: 100%;
    }
  `}

  &:hover {
    opacity: 1;
  }

  &:hover ${FeaturedProductTitle} {
    opacity: 1;
    top: 100%;
  }
  
  @media(max-width:1000px) {
    min-width: 50%;
    min-width: 50%;
    transform: translateX(-350%);

    ${({ animating }) => animating === 'left' && `
      transition: transform 0.3s ease-out, left 0.3s ease-out, opacity 0.5s ease;
      transform: translateX(-450%);
    `}

    ${({ animating }) => animating === 'right' && `
      transition: transform 0.3s ease-out, left 0.3s ease-out, opacity 0.5s ease;
      transform: translateX(-250%);
    `}
  }
`;

export const FeaturedProductImage = styled.img`
  width: 100%;
  height: auto;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0) !important;
`;

export const FeaturedProductTitle = styled.h2`
  opacity: 0;
  position: absolute;
  top: calc(100% - 50px);
  text-align: center;
  font-size: 20px;
`;

export const FeaturedProductLink = styled(Link)`
  display: block;
  font-size: 16px;
  opacity: 0.6;
`;
