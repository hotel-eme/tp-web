import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Container from './common/Container';
import './css/index.css';
import MeuPerfilScreen from './screens/01.MeuPerfil';
import ContadorPessoasScreen from './screens/02.ContadorPessoas';
import MultiplicadorDoisNumerosScreen from './screens/03.MultiplicadorDoisNumeros.js';
import AlunosScreen from './screens/08.Alunos';

function App() {
  return (
    <Container>
      <h1>Trabalhos Práticos de Front-end</h1>
      <nav id="menu">
        <ul>
          <li><Link to="/01-meu-perfil">01. Meu Perfil</Link></li>
          <li><Link to="/02-contador-pessoas">02. Contador De Pessoas</Link></li>
          <li><Link to="/03-multiplicador-dois-numeros">03. Multiplicador de Dois Números</Link></li>
          <li><Link to="/08-alunos">08. Alunos</Link></li>
        </ul>
      </nav>
    </Container>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/01-meu-perfil" element={<MeuPerfilScreen />} />
      <Route path="/02-contador-pessoas" element={<ContadorPessoasScreen />} />
      <Route path="/03-multiplicador-dois-numeros" element={<MultiplicadorDoisNumerosScreen />} />
      <Route path="/08-alunos/*" element={<AlunosScreen />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
