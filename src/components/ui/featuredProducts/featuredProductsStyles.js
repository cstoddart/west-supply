import styled from 'styled-components';

export const StyledFeaturedProducts = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const FeaturedProduct = styled.div`
  min-width: 25%;
  height: 350px;
  background-image: url(${({ imageSource}) => imageSource});
  background-size: cover;
  background-position: center;
  transform: translateX(-250%);
  ${({ animating }) => animating === 'left' && `
    transition: 0.7s ease-out;
    transform: translateX(-350%);
  `};
  ${({ animating }) => animating === 'leftTwo' && `
    transition: 0.7s ease-out;
    transform: translateX(-450%);
  `};
  ${({ animating }) => animating === 'right' && `
    transition: 0.7s ease-out;
    transform: translateX(-150%);
  `};
  ${({ animating }) => animating === 'rightTwo' && `
    transition: 0.7s ease-out;
    transform: translateX(-50%);
  `};
`;
