import React from "react";
import CallingModel from "./CallingModel";
import styled from "styled-components";
import boxTitle from "./../assets/AR Assets/box_title.png";
import map from "./../assets/AR Assets/map.png";

const WhileCalling = () => {
  return (
    <$Wrapper>
      <CallingModel />
      <$Title>
        <img src={boxTitle} alt="box_title" />
      </$Title>
      <$ManualWrapper>
        <$Manual>메뉴얼 이미지</$Manual>
        <$HMI>
          <img src={map} alt="'hmi" />
        </$HMI>
      </$ManualWrapper>
    </$Wrapper>
  );
};

export default WhileCalling;

const $Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5vw 5vw 0;
  display: flex;
  justify-content: space-between;
`;
const $Title = styled.div`
  padding-top: 1vw;
  width: 30vw;
  img {
    width: 100%;
  }
`;

const $ManualWrapper = styled.div`
  padding: 3vw 0;
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;

const $Manual = styled.div`
  width: 15vw;
  height: 47vw;
  border: 1px solid gray;
  border-radius: 1vw;
  background-color: white;
`;

const $HMI = styled.div`
  width: 15vw;
  /* height: 15vw;
  border: 1px solid gray;
  border-radius: 1vw;
  background-color: white; */
  img {
    border-radius: 1vw;
    width: 100%;
  }
`;
