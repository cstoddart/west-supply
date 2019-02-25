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
  transform: translateX(-250%);
  cursor: pointer;
  opacity: ${({ active }) => active ? 1 : 0.65};
  transition: ${({ active }) => !active && 'opacity 0.5s ease'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  ${({ animating }) => animating === 'left' && `
    transition: transform 0.3s ease-out, opacity 0.5s ease;
    transform: translateX(-350%);
  `}
  ${({ animating }) => animating === 'leftTwo' && `
    transition: transform 0.3s ease-out, opacity 0.5s ease;
    transform: translateX(-450%);
  `}
  ${({ animating }) => animating === 'right' && `
    transition: transform 0.3s ease-out, opacity 0.5s ease;
    transform: translateX(-150%);
  `}
  ${({ animating }) => animating === 'rightTwo' && `
    transition: transform 0.3s ease-out, opacity 0.5s ease;
    transform: translateX(-50%);
  `}

  ${({ active, animating }) => active && animating && `
    ${FeaturedProductTitle} {
      transition: opacity 0.5s ease, top 0.3s ease-out;
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
`;

export const FeaturedProductImage = styled.img`
  width: 100%;
  height: auto;
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
`;
