import styled from 'styled-components';

export const StyledSectionHeader = styled.h1`
  position: relative;
  padding-bottom: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 1px;
  max-width: 600px;
  margin: 0 auto 100px;

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
  }

  ${({ left }) => left && `
    margin: 0 auto 50px 0;
    text-align: left;

    &:after {
      margin: 0 auto 0 0;
    }
  `}
`;
