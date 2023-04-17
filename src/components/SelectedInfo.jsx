import React from "react";
import styled from "styled-components";

const SelectedInfo = () => {
  return (
    <$Wrapper>
      <$Ul>
        <$Li>
          <span>제품명</span>
        </$Li>
        <$Li>GAC 1240 PLUS</$Li>
        <$Li>
          <span>제조사</span>
        </$Li>
        <$Li>NORIT(미국)</$Li>
        <$Li>
          <span>형식</span>
        </$Li>
        <$Li>입축원형 압력탱크</$Li>
        <$Li>
          <span>규격</span>
        </$Li>
        <$Li>제품명</$Li>
        <$Li>
          <span>용량</span>
        </$Li>
        <$Li>1.25 m³/hr</$Li>
        <$Li>
          <span>EBCT</span>
        </$Li>
        <$Li>20~36분</$Li>
      </$Ul>
    </$Wrapper>
  );
};

export default SelectedInfo;

const $Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const $Ul = styled.ul`
  position: absolute;
  top: 3.8vw;
  left: 0.8vw;
  width: 90%;
  /* background-color: pink; */
  background-color: #ffffff94;
  padding: 1.5vw;
`;

const $Li = styled.li`
  font-size: 1.2vw;
  span {
    font-weight: bold;
  }
  margin-bottom: 0.5vw;
`;
