import styled from 'styled-components';

import texas from '../../../assets/images/texas.svg';
import { Section } from '../section';

export const StyledFooter = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

export const TexasIcon = styled.img.attrs({
  src: texas,
})`
  width: 20px;
  height: 20px;
  margin-left: 7px;
`;
