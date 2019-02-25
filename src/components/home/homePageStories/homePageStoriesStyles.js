import styled from 'styled-components';
import { Link } from 'react-router-dom';

import arrowHead from '../../../assets/images/arrowHead.svg';
import { Section } from '../../ui';
  
export const StyledHomePageStories = styled.div``;

export const StoryImageContainer = styled.div`
  height: 500px;
  min-width: 65%;
  max-width: 65%;
  overflow: hidden;
`;

export const StoryImage = styled.div`
  transform: scale(1);  
  transition: 10s linear;
  width: 100%;
  height: 100%;
  background-image: url(${({ imageSource }) => imageSource});
  background-size: cover;
`;

export const StoryLink = styled(Link)`
  font-weight: bold;
  transition: padding 0.3s ease-out;
  position: relative;
  
  &:after {
    content: url(${arrowHead});
    display: block;
    width: 12px;
    height: auto;
    line-height: 1;
    position: absolute;
    left: 0;
    top: 2px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

export const Story = styled(Section)`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 75px;
  }

  &:hover {
    ${StoryImage} {
      transform: scale(1.1);
    }

    ${StoryLink} {
      padding-left: 20px;
      
      &:after {
        opacity: 1;
      }
    }
  }
`;

export const StoryContent = styled.div``;

export const StoryTitle = styled.h1``;

export const StoryDescription = styled.div``;
