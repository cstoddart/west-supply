import React, { Component } from 'react';

import leatherwork1 from '../../../assets/images/leatherwork1.jpg';
import leatherwork2 from '../../../assets/images/leatherwork2.jpg';
import {
  StyledHomePageStories,
  Story,
  StoryImageContainer,
  StoryImage,
  StoryContent,
  StoryTitle,
  StoryDescription,
} from './homePageStoriesStyles';

export class HomePageStories extends Component {
  render() {
    return (
      <StyledHomePageStories>
        <Story>
          <StoryImageContainer>
            <StoryImage imageSource={leatherwork1} />
          </StoryImageContainer>
          <StoryContent>
            <StoryTitle>Story 1</StoryTitle>
            <StoryDescription>Lorem ipsum dolor amet blog twee wayfarers vaporware meggings typewriter subway tile hashtag tumblr biodiesel copper mug ugh.</StoryDescription>
          </StoryContent>
        </Story>
        <Story>
          <StoryContent>
            <StoryTitle>Story 2</StoryTitle>
            <StoryDescription>Lorem ipsum dolor amet blog twee wayfarers vaporware meggings typewriter subway tile hashtag tumblr biodiesel copper mug ugh.</StoryDescription>
          </StoryContent>
          <StoryImageContainer>
            <StoryImage imageSource={leatherwork2} />
          </StoryImageContainer>
        </Story>
        <Story>
          <StoryImageContainer>
            <StoryImage imageSource={leatherwork1} />
          </StoryImageContainer>
          <StoryContent>
            <StoryTitle>Story 3</StoryTitle>
            <StoryDescription>Lorem ipsum dolor amet blog twee wayfarers vaporware meggings typewriter subway tile hashtag tumblr biodiesel copper mug ugh.</StoryDescription>
          </StoryContent>
        </Story>
      </StyledHomePageStories>
    );
  }
}
