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
          <$RowTitle>활성탄 차압</$RowTitle>
          <$RowContent>123</$RowContent>
        </$RowList>
        <$RowList>
          <img src={boxStat} alt="status" />
          <$RowTitle>여재유출방지 차압</$RowTitle>
          <$RowContent>123</$RowContent>
        </$RowList>
      </$InfoRow>
      <$InfoCol>
        <$ColList>
          <img src={boxStatCol} alt="status" />
          <$ColTitle>유출유량</$ColTitle>
          <$ColContent1>123</$ColContent1>
          <$ColContent2>123</$ColContent2>
        </$ColList>
        <$ColList>
          <img src={boxStatCol} alt="status" />
          <$ColTitle>유출TOC</$ColTitle>
          <$ColContent1>123</$ColContent1>
          <$ColContent2>123</$ColContent2>
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
`;

const $RowTitle = styled.div`
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
`;

const $RowContent = styled.div`
  /* border: 0.5px solid green; */
  position: absolute;
  top: 7.3vw;
  left: 0.5vw;
  width: 3.5vw;
  height: 1.5vw;
  display: flex;
  justify-content: center;
  font-weight: bold;
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
`;

const $ColTitle = styled.div`
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
`;

const $ColContent1 = styled.div`
  /* background-color: pink; */
  /* border: 0.5px solid green; */
  position: absolute;
  top: 3.5vw;
  left: 5vw;
  width: 5.5vw;
  height: 1.5vw;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

const $ColContent2 = styled.div`
  /* border: 0.5px solid green; */
  position: absolute;
  top: 5.3vw;
  left: 5vw;
  width: 5.5vw;
  height: 1.5vw;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;
