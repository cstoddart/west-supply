import React, { Component } from 'react';

import {
  StyledFooter,
  Left,
  Right,
  TexasIcon,
} from './footerStyles';

export class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <Left>
          © {new Date().getFullYear()} West Supply Co.
        </Left>
        |
        <Right>
          Made In <TexasIcon />
        </Right>
      </StyledFooter>
    );
  }
}
