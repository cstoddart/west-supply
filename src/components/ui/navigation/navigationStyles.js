import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { siteWidth } from '../../../constants';

export const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${siteWidth};
  width: 95%;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 75px;
  position: relative;

  @media(max-width: 1000px) {
    justify-content: center;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 175px;
  flex: 0 0;
`;

export const NavigationLink = styled(Link)`
  display: inline-flex;
  align-items: center;
`;

const NavigationSection = styled.div`
  flex: 1 1;
  text-transform: uppercase;
  
  & > *:not(:last-of-type) {
    margin-right: 35px;
  }
`;

export const Left = styled(NavigationSection)`
  @media(max-width: 1000px) {
    display: none;
  }
`;

export const Right = styled(NavigationSection)`
  text-align: right;

  @media(max-width: 1000px) {
    display: none;
  }
`;

export const ShoppingCartIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const MobileNavigation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.98);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const MobileNavigationIcon = styled.div`
  position: absolute;
  right: 0;
  top: 75px;
  z-index: 3;
  cursor: pointer;
  display: none;
  width: 20px;
  height: 2px;
  background-color: black;
  margin-right: 15px;
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    transform: rotate(0);
  }

  &:before {
    bottom: 100%;
    border-top: 2px solid black;
    padding-bottom: 5px;
  }

  &:after {
    top: 100%;
    border-bottom: 2px solid black;
    padding-top: 5px;
  }
  
  ${({ active }) => active && `
    width: 25px;
    height: 25px;
    top: 65px;
    background-color: transparent;
    
    &:before {
      padding-bottom: 0;
      transform: rotate(45deg);
      transition: transform 0.3s ease-out;
      bottom: 11.5px;
    }
    
    &:after {
      padding-top: 0;
      transform: rotate(-45deg);
      transition: transform 0.3s ease-out;
      top: 11.5px;
    }
  `}

  @media(max-width: 1000px) {
    display: initial;
  }
`;
