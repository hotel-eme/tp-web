import axios from 'axios';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Container from "../common/Container";
import { CampoCheckbox, CampoTexto } from '../common/forms';

const apiAlunos = axios.create({
  baseURL: 'http://localhost:19800/api/alunos/',
  headers: { 'Accept': 'application/json' },
});

function ListaAlunos(props) {
  /**
   * Tela de listagem de alunos
   */
  const [alunos, setAlunos] = useState(null);

  function buscaAlunos() {
    apiAlunos.get('/').then(function (resposta) {
      setAlunos(resposta.data);
    });
  }

  !alunos && buscaAlunos();

  return (
    <Container title="Alunos">
      {alunos && alunos.map(function (aluno) {
        return <Aluno {...aluno} />
      })}
      <Link to="cadastro">Adicionar aluno</Link>
    </Container>
  );
}

function Aluno(props) {
  /**
   * Componente para exibir cada aluno em uma lista
   */
  return (
    <article>
      <p>{props.nome}</p>
    </article>
  );
}

function DetalhesAluno(props) {
  /**
   * Tela para exibir detalhes de um aluno
   */
  return (
    <Container title="Detalhes de Aluno">
      detalhe de alunos
    </Container>
  );
}

function CadastroAluno(props) {
  /**
   * Tela para cadastro de um novo aluno
   */
  return (
    <Container title="Cadastro de Aluno">
      <FormularioAluno />
    </Container>
  );
}

function AlteracaoAluno(props) {
  /**
   * Tela para alteração de um aluno existente
   */
  return (
    <Container title="Alteração de Aluno">
      alteracao de aluno
    </Container>
  );
}

function FormularioAluno(props) {
  /**
   * Formulário para cadastrar ou alterar um aluno
   */
  return (
    <Container>
      <form>
        <CampoTexto nomeExibicao="Nome" nomeApi="nome" />
        <CampoTexto nomeExibicao="CPF" nomeApi="cpf" />
        <CampoTexto nomeExibicao="Email" nomeApi="email" />
        <CampoTexto nomeExibicao="RA" nomeApi="registro_aluno" />
        <CampoTexto nomeExibicao="Data de nascimento" nomeApi="data_nascimento" />
        <CampoTexto nomeExibicao="Endereço" nomeApi="endereco" />
        <CampoCheckbox nomeExibicao="Matriculado" nomeApi="matriculado" />
      </form>
    </Container>
  );
}

export default function AlunosScreen() {
  return (
    <Routes>
      <Route path="/" element={<ListaAlunos />} />
      <Route path="/:id" element={<DetalhesAluno />} />
      <Route path="/cadastro" element={<CadastroAluno />} />
      <Route path="/:id/alteracao" elesment={<AlteracaoAluno />} />
    </Routes>
  );
}
