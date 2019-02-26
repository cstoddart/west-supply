import React, { Component } from 'react';

import { StyledFooter } from './footerStyles';

export class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        © {new Date().getFullYear()} West Supply Co.
      </StyledFooter>
    );
  }
}
