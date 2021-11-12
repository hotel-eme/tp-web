import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Container from './common/Container';
import './css/index.css';
import MeuPerfilScreen from './screens/01.MeuPerfil';
import ContadorPessoasScreen from './screens/02.ContadorPessoas';
import AlunosScreen from './screens/08.CadastroAluno';

function App() {
  return (
    <Container>
      <h1>Trabalhos Práticos de Front-end</h1>
      <nav>
        <Link to="/01-meu-perfil">01. Meu Perfil</Link>
        <Link to="/02-contador-pessoas">02. Contador De Pessoas</Link>
        <Link to="/08-cadastro-aluno">08. Cadastro de aluno</Link>
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
      <Route path="/08-cadastro-aluno/*" element={<AlunosScreen />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
