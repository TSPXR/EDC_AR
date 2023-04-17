import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import WhileCalling from "./components/WhileCalling";
import Footer from "./components/Footer";

function App() {
  const [whileCalling, setWhileCalling] = useState(false);
  return (
    <$Wrapper>
      <Header />
      {whileCalling ? <WhileCalling /> : <Main />}
      <Footer />
    </$Wrapper>
  );
}

export default App;

const $Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
