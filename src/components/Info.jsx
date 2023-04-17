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
        </$RowList>
        <$RowList>
          <img src={boxStat} alt="status" />
        </$RowList>
      </$InfoRow>
      <$InfoCol>
        <$ColList>
          <img src={boxStatCol} alt="status" />
        </$ColList>
        <$ColList>
          <img src={boxStatCol} alt="status" />
        </$ColList>
      </$InfoCol>
      <$InfoCol></$InfoCol>
    </$InfoWrapper>
  );
};

export default Info;

const $InfoWrapper = styled.div`
  border: 1px solid blue;
  width: 14vw;
  display: flex;
  flex-direction: column;
`;
const $InfoRow = styled.ul`
  width: 100%;
  display: flex;
`;

const $RowList = styled.li`
  flex-grow: 1;
  /* border: 1px solid green; */
  img {
    width: 100%;
  }
`;

const $InfoCol = styled.ul`
  width: 100%;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
`;

const $ColList = styled.li`
  img {
    width: 100%;
  }
`;
