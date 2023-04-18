import { createGlobalStyle } from "styled-components";
import ResetStyle from "./resetStyle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NanumSquare from "./../assets/font/NanumSquareR.otf";
import NanumSquareTtf from "./../assets/font/NanumSquareR.ttf";
import NanumSquareB from "./../assets/font/NanumSquareB.otf";
import NanumSquareBTtf from "./../assets/font/NanumSquareB.ttf";
import NanumSquareEB from "./../assets/font/NanumSquareEB.otf";
import NanumSquareEBTtf from "./../assets/font/NanumSquareEB.ttf";

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  @font-face {
  font-family: "NanumSquare";
  src: url(${NanumSquareTtf}) format("truetype"),
      url(${NanumSquare}) format("opentype");
  font-weight: normal;
  font-style: normal;
  }

  @font-face {
  font-family: "NanumSquare";
  src: url(${NanumSquareBTtf}) format("truetype"),
      url(${NanumSquareB}) format("opentype");
  font-weight: bold;
  }

  @font-face {
  font-family: "NanumSquareEB";
  src: url(${NanumSquareEBTtf}) format("truetype"),
      url(${NanumSquareEB}) format("opentype");
  font-weight: normal;
  }

* {
    box-sizing: border-box;
  }
  html {
  }
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overscroll-behavior: contain;
    font-family: 'NanumSquare';
  }
`;

export default GlobalStyle;
