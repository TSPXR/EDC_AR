import React from "react";
import styled from "styled-components";
import uiTop from "./../assets/AR Assets/ui_top.png";

const Header = () => {
  return (
    <$Header>
      <img src={uiTop} alt="ui_top" />
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
