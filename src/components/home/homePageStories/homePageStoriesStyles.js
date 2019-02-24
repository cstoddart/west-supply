import styled from 'styled-components';
  
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

export const Story = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  & > *:not(:last-child) {
    margin-right: 50px;
  }

  &:hover ${StoryImage} {
    transform: scale(1.1);
  }
`;

export const StoryContent = styled.div``;

export const StoryTitle = styled.h1``;

export const StoryDescription = styled.div``;
