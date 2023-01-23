import React from "react";
import styled from "styled-components";

function StoryCultureListItem({ image, title, text, hashText }) {
  return (
    <StyledCultureList>
      <img src={image} alt="아이콘" />
      <StyledCultureTextBox>
        <StyledCultureTitle>{title}</StyledCultureTitle>
        <StyledCultureText>{text}</StyledCultureText>
        <StyledCultureHashText>{hashText}</StyledCultureHashText>
      </StyledCultureTextBox>
    </StyledCultureList>
  );
}

export default StoryCultureListItem;

const StyledCultureList = styled.li`
  width: 25%;
  list-style: none;

  img {
    width: 100%;
  }
`;

const StyledCultureTextBox = styled.div`
  p {
    font-weight: 300;
    letter-spacing: -2px;
  }
`;

const StyledCultureTitle = styled.h4`
  letter-spacing: -1px;
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 10px;
  letter-spacing: -3px;
`;

const StyledCultureText = styled.p`
  line-height: 1.8;
  font-size: 17px;
  margin-bottom: 16px;
`;

const StyledCultureHashText = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #00b388;
`;
