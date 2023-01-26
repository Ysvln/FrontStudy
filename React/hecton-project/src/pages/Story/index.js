import { Link } from "react-router-dom";
import styled from "styled-components";
import StoryCulture from "./components/StoryCulture";
import StoryMain from "./components/StoryMain";

function Story() {
  return (
    <StyledStory>
      <main>
        <StyledContainer>
          <StoryMain />
          <StoryCulture />
        </StyledContainer>
      </main>
    </StyledStory>
  );
}
export default Story;

const StyledStory = styled.div`
  background-color: #1b1e1c;
  color: #f1f1f5;
`;

const StyledContainer = styled.div`
  padding-top: 5.2rem;
  width: 100%;
  min-height: 100vh;
`;
