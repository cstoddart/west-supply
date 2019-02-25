import styled from 'styled-components';
import { Link } from 'react-router-dom';

import arrowHead from '../../../assets/images/arrowHead.svg';
import {
  Section,
  SectionHeader,
} from '../../ui';
  
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
    width: 14px;
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
  
  &:not(:last-of-type) {
    padding-bottom: 50px;
    margin-bottom: 50px;
  }
  
  &:not(:first-of-type) {
    padding-top: 50px;
  }

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

export const StoryTitle = styled(SectionHeader).attrs({
  underline: true,
  left: true,
})`
  margin-bottom: 20px;
`;

export const StoryDescription = styled.p`
  opacity: 0.6;
  padding-bottom: 25px;
`;
