import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "@fontsource/montserrat";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Container from "./layout/Container";
import LodgingSheet from "../pages/LodgingSheet";

export default function App() {
  const GlobalStyle = createGlobalStyle`
      div {
          font-family: 'Montserrat', sans-serif;
      }
  `;

  return (
    <Container>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          {/* doit correspondre à mon link et m'enverra sur <Home />*/}
          <Route path="/" element={<Home />} />{" "}
          <Route path="/about" element={<About />} />
          <Route path="/lodging/:id" element={<LodgingSheet />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}
