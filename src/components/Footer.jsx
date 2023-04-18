import React from "react";
import styled from "styled-components";
import uiBottom from "./../assets/AR Assets/ui_bottom.png";

const Footer = () => {
  return (
    <$Footer>
      <img src={uiBottom} alt="ui_bottom" />
    </$Footer>
  );
};

export default Footer;

const $Footer = styled.div`
  width: 100vw;
  height: 2.7vw;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  img {
    position: absolute;
    bottom: 0;
    width: 16vw;
  }
`;
