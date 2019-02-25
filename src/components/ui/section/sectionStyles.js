import styled from 'styled-components';
import { siteWidth } from '../../../constants';

export const StyledSection = styled.div`
  margin-bottom: 150px;
  max-width: ${({ fullWidth }) => fullWidth ? 'none' : siteWidth};
  width: 95%;
  margin-left: auto;
  margin-right: auto;
`;
