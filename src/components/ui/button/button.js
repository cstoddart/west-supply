import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { StyledButton } from './buttonStyles';

export const Button = (props) => (
  <Fragment>
    {props.to
      ? <StyledButton to={props.to} {...props}>{props.children}</StyledButton>
      : <StyledButton as="button" {...props}>{props.children}</StyledButton>
    }
  </Fragment>
);
