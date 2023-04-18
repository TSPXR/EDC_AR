import React from "react";
import styled from "styled-components";
import uiTop from "./../assets/AR Assets/ui_top.png";

const Header = ({ whileCalling }) => {
  return (
    <$Header>
      <img src={uiTop} alt="ui_top" />
      <$Recording>00:00:02</$Recording>
    </$Header>
  );
};

export default Header;

const $Header = styled.div`
  width: 100vw;
  height: 2.7vw;
  position: absolute;
  top: 0;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

const $Recording = styled.div`
  position: absolute;
  right: 4vw;
  top: 0.5vw;
  font-weight: bold;
  &:before {
    content: "";
    position: absolute;
    left: -2vw;
    width: 1.5vw;
    height: 1.5vw;
    border-radius: 50%;
    background-color: rgba(249, 0, 42, 0.5);
  }
`;
