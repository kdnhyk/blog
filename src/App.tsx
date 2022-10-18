import { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Calculator from "./pages/Calculator";
import Lots from "./pages/Lots";

const GlobalStyle = createGlobalStyle`
  body {
    background: black;
    color: white;
    a {
    text-decoration: none;
    color: white;
    }
  }

`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Lots" element={<Lots />} />
      </Routes>
    </>
  );
}
