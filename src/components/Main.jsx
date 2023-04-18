import React from "react";
import { useState } from "react";
import styled from "styled-components";
import boxTitle from "./../assets/AR Assets/box_title.png";
import Model from "./Model";
import Info from "./Info";

const Main = ({ whileCalling }) => {
  const [end, setEnd] = useState(false);
  return (
    <$Wrapper>
      <$Title>
        <img src={boxTitle} alt="box_title" />
        <div>활성탄</div>
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
  position: relative;
  width: 30vw;
  img {
    width: 100%;
  }
  div {
    /* border: 0.5px solid green; */
    position: absolute;
    top: 0.5vw;
    left: 3vw;
    width: 26.5vw;
    height: 4.2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5vw;
  }
`;

const $ModelWrapper = styled.div`
  display: flex;
`;
