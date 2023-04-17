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
import SelectedInfo from "./SelectedInfo";
import ModelSlider from "./ModelSlider";

const indicator = [
  {
    id: "5asis",
    src: asis,
    selected: chk5asis,
  },
  {
    id: "maint_slc",
    src: maint_slc,
    selected: chkMaint,
  },
  {
    id: "info_slc",
    src: info_slc,
    selected: chkInfo,
  },
];

const Model = () => {
  const [selected, setSelected] = useState("5asis");
  const handleClick = (id) => {
    setSelected(id);
  };

  console.log(selected);
  return (
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
        <$Model>
          {selected !== "maint_slc" && <img src={model} alt="3d_model" />}
        </$Model>
        {selected === "info_slc" && <SelectedInfo />}
        {selected === "maint_slc" && <ModelSlider />}
      </$ModelBox>
    </$ModelWrapper>
  );
};

export default Model;

const $ModelWrapper = styled.div`
  width: 14vw;
  position: relative;
  display: flex;
`;

const $ModelBox = styled.div`
  position: relative;
  z-index: 1;
  flex-grow: 1;
  img {
    width: 100%;
    height: 99%;
  }
`;
const $Model = styled.div`
  position: absolute;
  top: 4.5vw;
  left: 2.5vw;
  width: 9vw;
  img {
    width: 100%;
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
