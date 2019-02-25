import React, { Component } from 'react';

import {
  StyledSection,
} from './sectionStyles';

export class Section extends Component {
  render() {
    return (
      <StyledSection
        fullWidth={this.props.fullWidth ? 1 : 0}
        className={this.props.className}
      >
        {this.props.children}
      </StyledSection>
    );
  }
}
