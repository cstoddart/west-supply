import styled from 'styled-components';

import {
  Section,
  Button,
} from '../ui';

export const StyledProduct = styled(Section)`
  display: flex;
  align-items: flex-start;
  margin-top: 100px;
`;

export const Left = styled.div`
  width: 60%;
`;

export const Right = styled.div`
  width: 40%;
`;

export const AddToCartButton = styled(Button)`
  margin-top: 25px;
`;
