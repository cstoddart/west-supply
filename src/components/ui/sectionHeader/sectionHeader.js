import styled from 'styled-components';

export const SectionHeader = styled.h2`
  text-transform: uppercase;
  position: relative;
  padding-bottom: 5px;
  text-align: center;
  font-weight: normal;
  font-size: 22px;
  letter-spacing: 1px;
  max-width: 500px;
  margin: 0 auto 15px;

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
`;
