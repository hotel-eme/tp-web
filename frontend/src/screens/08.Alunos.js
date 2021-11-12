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
  function cadastraAluno(dadosFormulario) {
    apiAlunos.post('/', dadosFormulario).then(function () {
      window.location.href = `${window.location.path}/..`;
    });
  }

  return (
    <Container title="Cadastro de Aluno">
      <FormularioAluno aoSubmeter={cadastraAluno} />
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
  const [nome, setNome] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [email, setEmail] = useState(null);
  const [registroAluno, setRegistroAluno] = useState(null);
  const [dataNascimento, setDataNascimento] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [matriculado, setMatriculado] = useState(false);

  function submeteFormulario(event) {
    // Inibe comportamento do navegador de enviar o formulário, pois nós
    // queremos obter os dados e enviá-los via API
    event.preventDefault();

    props.aoSubmeter({
      nome: nome,
      cpf: cpf,
      email: email,
      registro_aluno: registroAluno,
      data_nascimento: dataNascimento,
      endereco: endereco,
      matriculado: matriculado,
    });
  }

  return (
    <Container>
      <form onSubmit={submeteFormulario}>
        <CampoTexto nomeExibicao="Nome" nomeApi="nome" onChange={function (event) { setNome(event.target.value) }} />
        <CampoTexto nomeExibicao="CPF" nomeApi="cpf" onChange={function (event) { setCpf(event.target.value) }} />
        <CampoTexto nomeExibicao="Email" nomeApi="email" onChange={function (event) { setEmail(event.target.value) }} />
        <CampoTexto nomeExibicao="RA" nomeApi="registro_aluno" onChange={function (event) { setRegistroAluno(event.target.value) }} />
        <CampoTexto nomeExibicao="Data de nascimento" nomeApi="data_nascimento" onChange={function (event) { setDataNascimento(event.target.value) }} />
        <CampoTexto nomeExibicao="Endereço" nomeApi="endereco" onChange={function (event) { setEndereco(event.target.value) }} />
        <CampoCheckbox nomeExibicao="Matriculado" nomeApi="matriculado" onChange={function (event) { setMatriculado(event.target.value) }} />
        <button type="submit">Cadastrar</button>
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
