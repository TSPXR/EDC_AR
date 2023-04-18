import React from "react";
import styled from "styled-components";
import { useState } from "react";
import model from "./../assets/AR Assets/활성탄.png";
import box3d from "./../assets/AR Assets/box_3d_title_w.png";
import asis from "./../assets/AR Assets/btn_5asis_slc.png";
import maint_slc from "./../assets/AR Assets/btn_maint_slc.png";
import info_slc from "./../assets/AR Assets/btn_info_slc.png";
import chk5asis from "./../assets/AR Assets/btn_5asis_nslc.png";
import chkInfo from "./../assets/AR Assets/btn_info_nslc.png";
import chkMaint from "./../assets/AR Assets/btn_maint_nslc.png";
import boxStat from "./../assets/AR Assets/box_stat_prs_s.png";
import boxStatCol from "./../assets/AR Assets/box_stat_flw_s.png";
import SelectedInfo from "./SelectedInfo";
import ModelSlider from "./ModelSlider";

const indicator = [
  {
    id: "5asis",
    src: asis,
    selected: chk5asis,
  },
  {
    id: "info_slc",
    src: info_slc,
    selected: chkInfo,
  },
];

const CallingModel = () => {
  const [selected, setSelected] = useState("5asis");
  const handleClick = (id) => {
    setSelected(id);
  };

  return (
    <$Wrapper>
      <$ModelWrapper>
        <$Indicator>
          {indicator.map((list) => (
            <$List
              selected={selected === list.id}
              key={list.id}
              onClick={() => {
                handleClick(list.id);
              }}
            >
              {selected === list.id ? (
                <img src={list.selected} />
              ) : (
                <img src={list.src} />
              )}
            </$List>
          ))}
        </$Indicator>
        <$ModelBox>
          <img src={box3d} alt="3d_model" />
          <$Text>3D 모델</$Text>
          <$Model>
            {selected !== "maint_slc" && <img src={model} alt="3d_model" />}
          </$Model>
          {selected === "info_slc" && <SelectedInfo />}
          {selected === "maint_slc" && <ModelSlider />}
        </$ModelBox>
      </$ModelWrapper>
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
      </$InfoWrapper>
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
    </$Wrapper>
  );
};

export default CallingModel;

const $Wrapper = styled.div`
  height: 50vw;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 3vw 0;
`;

const $ModelWrapper = styled.div`
  width: 14vw;
  position: relative;
  display: flex;
`;

const $ModelBox = styled.div`
  position: relative;
  z-index: 1;
  img {
    width: 100%;
  }
`;

const $Text = styled.div`
  /* border: 0.5px solid green; */
  position: absolute;
  top: 0.8vw;
  left: 1vw;
  width: 12vw;
  height: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.5vw;
`;

const $Model = styled.div`
  position: absolute;
  top: 5vw;
  left: 3vw;
  width: 9vw;
  img {
    width: 90%;
  }
`;

const $Indicator = styled.ul`
  position: absolute;
  top: 3.5vw;
  left: -1.3vw;
  display: flex;
  flex-direction: column;
`;

const $List = styled.li`
  width: ${({ selected }) => (selected ? "2vw" : "3vw")};
  img {
    width: 100%;
    /* border: 0.5px solid blue; */
  }
  :nth-child(2) {
    transform: translateY(-1vw);
  }
  :nth-child(3) {
    transform: translateY(-2vw);
  }
`;

const $InfoWrapper = styled.div``;

const $InfoRow = styled.ul`
  width: 14vw;
  display: flex;
`;

const $RowList = styled.li`
  position: relative;
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
  position: relative;
  z-index: 1;
  transform: translate(11.5vw, -35vw);
  width: 14vw;
  display: flex;
  flex-direction: column;
`;

const $ColList = styled.li`
  position: relative;
  :nth-child(2) {
    transform: translateY(-0.5vw);
  }
  img {
    width: 100%;
  }
`;

const $ColTitle = styled.div`
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
