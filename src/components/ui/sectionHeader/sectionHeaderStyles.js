import styled from 'styled-components';

export const StyledSectionHeader = styled.h1`
  position: relative;
  text-align: center;
  font-weight: bold;
  max-width: 600px;
  margin: 0 auto 100px;

  ${({ underline }) => underline ? `
    padding-bottom: 5px;

    &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      margin: 0 auto;
      height: 3px;
      width: 25%;
      background-color: black;
    }
  ` : null}

  ${({ left }) => left ? `
    margin: 0 auto 50px 0;
    text-align: left;

    &:after {
      margin: 0 auto 0 0;
    }
  ` : null}
`;
