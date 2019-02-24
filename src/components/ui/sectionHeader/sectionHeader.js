import React, { Component } from 'react';

import { StyledSectionHeader } from './sectionHeaderStyles';

export class SectionHeader extends Component {
  render() {
    return (
      <StyledSectionHeader left={this.props.left ? 1 : 0} className={this.props.className}>
        {this.props.children}
      </StyledSectionHeader>
    );
  }
}
