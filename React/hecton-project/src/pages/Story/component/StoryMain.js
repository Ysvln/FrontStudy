import React from "react";
import styled, { css } from "styled-components";
import storyMain from "../../../assets/images/story_main.jpg";

function StoryMain() {
  return (
    <StyledStoryMain>
      <StyledMainWrapper storyMain={storyMain}>
        <h1>끊임없는 도전과 지속적인 혁신은 우리의 다짐이자 약속입니다</h1>
      </StyledMainWrapper>
    </StyledStoryMain>
  );
}

export default StoryMain;

// 스타일드 컴포넌트로 사용되는 태그들은 다른 컴포넌트와 구분을 위해 앞에 Styled를 붙여 사용하였습니다.

const StyledStoryMain = styled.div``;

const StyledMainWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  background-image: url(storyMain);
  background-size: cover;
  //   background: 50% no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;

  ${({ storyMain }) =>
    storyMain &&
    css`
      background-image: url(${storyMain});
    `}

  h1 {
    width: 30vw;
    font-size: 54px;
    line-height: 1.5;
    margin-left: 190px;
    text-shadow: 1px 1px 20px #1e3250;
    letter-spacing: -4px;
  }
`;
