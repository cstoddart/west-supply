import styled from 'styled-components';
import { Link } from 'react-router-dom';

import arrowhead from '../../assets/images/arrowhead.svg';
import { Section } from '../ui';

export const StyledProducts = styled(Section)``;

export const ProductsImage = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${({ imageSource }) => imageSource});
  background-size: cover;
  margin-bottom: 100px;
`;

export const ProductLink = styled(Link)`
  font-weight: bold;
  transition: padding 0.3s ease-out;
  position: relative;
  
  &:after {
    content: url(${arrowhead});
    display: block;
    width: 15px;
    height: auto;
    line-height: 1;
    position: absolute;
    left: 0;
    top: 1px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

export const Product = styled.div`
  text-align: center;
  margin: 0 auto 100px;
  max-width: 650px;
  
  &:hover {
    ${ProductLink} {
      padding-left: 25px;
      
      &:after {
        opacity: 1;
      }
    }
  }
`;

export const ProductTitle = styled.h1`
  font-size: 38px;
`;

export const ProductDescription = styled.p`
  opacity: 0.6;
  font-size: 22px;
  margin-bottom: 35px;
`;
