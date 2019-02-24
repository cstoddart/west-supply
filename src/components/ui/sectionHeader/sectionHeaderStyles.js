import styled from 'styled-components';

export const StyledSectionHeader = styled.h1`
  text-transform: uppercase;
  position: relative;
  padding-bottom: 5px;
  text-align: center;
  font-weight: normal;
  font-size: 22px;
  letter-spacing: 1px;
  max-width: 500px;
  margin: 0 auto 50px;

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 3px;
    width: 50px;
    background-color: black;
    border-radius: 3px;
  }

  ${({ left }) => left && `
    margin: 0 auto 50px 0;
    text-align: left;

    &:after {
      margin: 0 auto 0 0;
    }
  `}
`;
