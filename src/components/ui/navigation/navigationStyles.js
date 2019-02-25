import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { siteWidth } from '../../../constants';

export const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${siteWidth};
  width: 95%;
  margin: 0 auto 10px;
  padding-top: 50px;
  padding-bottom: 50px;
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
`;

export const Right = styled(NavigationSection)`
  text-align: right;
`;

export const ShoppingCartIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
