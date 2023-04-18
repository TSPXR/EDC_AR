import React from "react";
import CallingModel from "./CallingModel";
import styled from "styled-components";
import boxTitle from "./../assets/AR Assets/box_title.png";
import map from "./../assets/AR Assets/map.png";
import CallingSlider from "./CallingSlider";

const WhileCalling = () => {
  return (
    <$Wrapper>
      <CallingModel />
      <$TitleSliderWrapper>
        <$Title>
          <img src={boxTitle} alt="box_title" />
          <div>활성탄</div>
        </$Title>
        <CallingSlider />
      </$TitleSliderWrapper>
      <$ManualWrapper>
        <$Manual></$Manual>
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

const $TitleSliderWrapper = styled.div`
  padding-bottom: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const $Title = styled.div`
  position: relative;
  padding-top: 1vw;
  width: 30vw;
  img {
    width: 100%;
  }
  div {
    /* border: 0.5px solid green; */
    position: absolute;
    top: 1.3vw;
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

const $ManualWrapper = styled.div`
  padding-top: 4vw;
  padding-bottom: 1vw;
  /* padding-top: 3vw; */
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;

const $Manual = styled.div`
  width: 15vw;
  flex-grow: 1;
  border: 1px solid gray;
  border-radius: 1vw;
  background-color: white;
`;

const $HMI = styled.div`
  width: 15vw;
  /* flex-grow: 1; */
  /* height: 15vw;
  border: 1px solid gray;
  border-radius: 1vw;
  background-color: white; */
  img {
    border-radius: 1vw;
    width: 100%;
  }
`;
