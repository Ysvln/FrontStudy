import React from "react";
import styled from "styled-components";
import Intro01 from "../../../assets/images/intro01.png";
import Intro02 from "../../../assets/images/intro02.png";
import Intro03 from "../../../assets/images/intro03.png";

import StoryCultureListItem from "./StoryCultureListItem";

function StoryCulture() {
  return (
    <StyledStoryCulture>
      <StyledStoryCultureWrapper>
        <StyledInnerWrap>
          <h3>헥톤컬쳐</h3>
          <StyledCultureBox>
            {/* 반복되어 사용되는 요소로 -> 컴포넌트 import 하여 사용했습니다. */}
            <StoryCultureListItem
              image={Intro01}
              title="끊임없는 도전"
              text="불합리와 불편함에 끊임없이 고민하고 도전하겠습니다"
              hashText="#불합리에도전 #불편함에도전"
            />

            <StoryCultureListItem
              image={Intro02}
              title="지속적인 혁신"
              text="IT기술을 활용하여 불합리와 불편함을 합리와 편리함으로 바꾸겠습니다"
              hashText="# #불합리를합리로 #불편함을편리함으로"
            />

            <StoryCultureListItem
              image={Intro03}
              title="임팩트 있는 성장"
              text="끊임없는 도전과 완벽한 혁신으로 창의적 가치를 만들겠습니다"
              hashText="#완벽한혁신 #창의적가치"
            />
          </StyledCultureBox>
        </StyledInnerWrap>
      </StyledStoryCultureWrapper>
    </StyledStoryCulture>
  );
}

export default StoryCulture;

const StyledStoryCulture = styled.div``;

const StyledStoryCultureWrapper = styled.div`
  padding-top: 160px;
`;

const StyledInnerWrap = styled.div`
  width: calc(100% - 150px);
  margin: 0 auto;

  h3 {
    margin-bottom: 20px;
    font-size: 35px;
    letter-spacing: -3px;
  }
`;

const StyledCultureBox = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: calc(100% - 2rem);
`;
