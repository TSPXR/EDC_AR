import { createGlobalStyle } from "styled-components";
import ResetStyle from "./resetStyle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

* {
    box-sizing: border-box;
  }
  html {
    /* font-family: 'Gotham', 'NanumSquare'; */
  }
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
