import styled from 'styled-components';

import { siteWidth } from '../../../constants';

export const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${siteWidth};
  width: 95%;
  margin: 0 auto 10px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Logo = styled.img`
  max-width: 175px;
  flex: 0 0;
`;

const NavigationSection = styled.div`
  flex: 1 1;
  text-transform: uppercase;
  
  & > *:not(:last-of-type) {
    margin-right: 25px;
  }
`;

export const Left = styled(NavigationSection)`
`;

export const Right = styled(NavigationSection)`
  text-align: right;
`;
