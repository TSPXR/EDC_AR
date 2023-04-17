import React from "react";
import { useState } from "react";
import styled from "styled-components";
import boxTitle from "./../assets/AR Assets/box_title.png";
import Model from "./Model";
import Info from "./Info";

const Main = () => {
  const [end, setEnd] = useState(false);
  return (
    <$Wrapper>
      <$Title>
        <img src={boxTitle} alt="box_title" />
      </$Title>
      <$ModelWrapper>
        <Model />
        <Info />
      </$ModelWrapper>
    </$Wrapper>
  );
};

export default Main;

const $Wrapper = styled.div`
  width: 50vw;
  height: 40vw;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const $Title = styled.div`
  width: 30vw;
  img {
    width: 100%;
  }
`;

const $ModelWrapper = styled.div`
  display: flex;
`;
