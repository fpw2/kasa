import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/Error';
import Container from './Container';
import AccommodationSheet from '../pages/AccommodationSheet';

export default function App() {
  return(
      <Container>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/lodging" element={<AccommodationSheet />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Container>
  );
}
