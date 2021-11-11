import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './css/index.css';

function App() {
  return (
    <section id="app">
      <h1>Trabalhos Práticos de Front-end</h1>
      <nav>
      </nav>
    </section>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
