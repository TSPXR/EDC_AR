import React from "react";
import styled from "styled-components";
import boxStat from "./../assets/AR Assets/box_stat_prs_s.png";
import boxStatCol from "./../assets/AR Assets/box_stat_flw_s.png";

const Info = () => {
  return (
    <$InfoWrapper>
      <$InfoRow>
        <$RowList>
          <img src={boxStat} alt="status" />
          <div>활성탄 차압</div>
        </$RowList>
        <$RowList>
          <img src={boxStat} alt="status" />
          <div>여재유출방지 차압</div>
        </$RowList>
      </$InfoRow>
      <$InfoCol>
        <$ColList>
          <img src={boxStatCol} alt="status" />
          <div>유출유량</div>
        </$ColList>
        <$ColList>
          <img src={boxStatCol} alt="status" />
          <div>유출TOC</div>
        </$ColList>
      </$InfoCol>
    </$InfoWrapper>
  );
};

export default Info;

const $InfoWrapper = styled.div`
  width: 14vw;
  display: flex;
  flex-direction: column;
`;
const $InfoRow = styled.ul`
  width: 100%;
  display: flex;
`;

const $RowList = styled.li`
  position: relative;
  flex-grow: 1;
  /* border: 1px solid green; */
  img {
    width: 100%;
  }
  div {
    position: absolute;
    top: 0.5vw;
    left: 0.5vw;
    width: 6vw;
    height: 3.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.9vw;
    text-align: center;
    line-height: 1.2;
    word-break: keep-all;
  }
`;

const $InfoCol = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const $ColList = styled.li`
  position: relative;
  img {
    width: 100%;
  }
  div {
    /* border: 0.5px solid red; */
    position: absolute;
    top: 0.5vw;
    left: 0.5vw;
    width: 13vw;
    height: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1vw;
  }
`;
