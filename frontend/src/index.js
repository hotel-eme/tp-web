import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Container from './common/Container';
import './css/index.css';
import MeuPerfilScreen from './screens/01.MeuPerfil';

function App() {
  return (
    <Container>
      <h1>Trabalhos Práticos de Front-end</h1>
      <nav>
        <Link to="/01-meu-perfil">01. Meu Perfil</Link>
      </nav>
    </Container>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/01-meu-perfil" element={<MeuPerfilScreen />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
