import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import WhileCalling from "./components/WhileCalling";
import Footer from "./components/Footer";
import callStart from "./assets/AR Assets/call_start.png";
import callEnd from "./assets/AR Assets/call_end.png";

function App() {
  const [whileCalling, setWhileCalling] = useState(false);
  return (
    <$Wrapper>
      <Header whileCalling={whileCalling} />
      {whileCalling ? (
        <WhileCalling whileCalling={whileCalling} />
      ) : (
        <Main whileCalling={whileCalling} />
      )}
      <$CallBox
        whileCalling={whileCalling}
        onClick={() => {
          setWhileCalling((prev) => !prev);
        }}
      >
        <img src={whileCalling ? callEnd : callStart} alt="calling" />
      </$CallBox>
      <Footer />
    </$Wrapper>
  );
}

export default App;

const $Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const $CallBox = styled.div`
  transform: ${({ whileCalling }) =>
    whileCalling ? "translateY(-6vw)" : "translateY(-2.5vw)"};
  width: 30vw;
  img {
    width: 100%;
  }
`;
