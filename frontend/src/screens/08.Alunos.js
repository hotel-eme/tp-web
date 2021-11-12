import axios from 'axios';
import { useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
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
      <Link to={`${props.id}`}>Ver aluno</Link>
    </article>
  );
}

function DetalhesAluno(props) {
  /**
   * Tela para exibir detalhes de um aluno
   */
  let params = useParams();
  const [aluno, setAluno] = useState(null);

  function buscaAluno() {
    apiAlunos.get(`/${params.id}/`).then(function (resposta) {
      setAluno(resposta.data);
    });
  }

  !aluno && buscaAluno();

  function apagaAluno() {
    if (!window.confirm(
      `Tem certeza que deseja apagar o aluno "${aluno.nome}"?`
    )) return;  // Aborta função se a pessoa não confirmar

    apiAlunos.delete(`/${params.id}/`).then(function () {
      window.location.href = `${window.location.path}/..`;
    });
  }

  return (
    <Container title="Detalhes de Aluno">
      <Link to="..">Voltar para lista de alunos</Link>
      {aluno && <dl>
        <dt>Nome</dt><dd>{aluno.nome}</dd>
        <dt>CPF</dt><dd>{aluno.cpf}</dd>
        <dt>Registro de Aluno (RA)</dt><dd>{aluno.registro_aluno}</dd>
        <dt>Data de nascimento</dt><dd>{aluno.data_nascimento}</dd>
        <dt>Endereço</dt><dd>{aluno.endereco}</dd>
        <dt>Matriculado</dt><dd>{aluno.matriculado ? "Sim" : "Não"}</dd>
      </dl>}
      <Link to="alteracao">Alterar aluno</Link>
      <button onClick={apagaAluno}>Apagar aluno</button>
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
      <FormularioAluno aoSubmeter={cadastraAluno} textoBotao="Cadastrar" />
    </Container>
  );
}

function AlteracaoAluno(props) {
  /**
   * Tela para alteração de um aluno existente
   */
  let params = useParams();
  const idAluno = params.id;
  const [aluno, setAluno] = useState(null);

  // Obtém os dados do aluno para pre-popular o formulário
  !aluno && apiAlunos.get(`/${idAluno}/`).then(function (resposta) {
    setAluno(resposta.data);
  });

  function alteraAluno(dadosFormulario) {
    apiAlunos.put(`/${idAluno}/`, dadosFormulario).then(function () {
      window.location.href = `${window.location.path}/..`;
    });
  }

  return (
    <Container title="Alteração de Aluno">
      <Link to="..">Cancelar</Link>
      <FormularioAluno dadosIniciais={aluno} aoSubmeter={alteraAluno} textoBotao="Alterar" />
    </Container>
  );
}

function FormularioAluno(props) {
  /**
   * Formulário para cadastrar ou alterar um aluno
   */
  const dadosIniciais = props.dadosIniciais || {};
  const [nome, setNome] = useState(dadosIniciais.nome);
  const [cpf, setCpf] = useState(dadosIniciais.cpf);
  const [registroAluno, setRegistroAluno] = useState(dadosIniciais.registro_aluno);
  const [dataNascimento, setDataNascimento] = useState(dadosIniciais.data_nascimento);
  const [endereco, setEndereco] = useState(dadosIniciais.endereco);
  const [matriculado, setMatriculado] = useState(dadosIniciais.matriculado);

  function submeteFormulario(event) {
    // Inibe comportamento do navegador de enviar o formulário, pois nós
    // queremos obter os dados e enviá-los via API
    event.preventDefault();

    props.aoSubmeter({
      nome: nome || dadosIniciais.nome,
      cpf: cpf || dadosIniciais.cpf,
      registro_aluno: registroAluno || dadosIniciais.registro_aluno,
      data_nascimento: dataNascimento || dadosIniciais.data_nascimento,
      endereco: endereco || dadosIniciais.endereco,
      matriculado: matriculado || dadosIniciais.matriculado,
    });
  }

  return (
    <form onSubmit={submeteFormulario}>
      <CampoTexto nomeExibicao="Nome" nomeApi="nome" valorInicial={dadosIniciais.nome} onChange={function (event) { setNome(event.target.value) }} />
      <CampoTexto nomeExibicao="CPF" nomeApi="cpf" valorInicial={dadosIniciais.cpf} onChange={function (event) { setCpf(event.target.value) }} />
      <CampoTexto nomeExibicao="RA" nomeApi="registro_aluno" valorInicial={dadosIniciais.registro_aluno} onChange={function (event) { setRegistroAluno(event.target.value) }} />
      <CampoTexto nomeExibicao="Data de nascimento" nomeApi="data_nascimento" valorInicial={dadosIniciais.data_nascimento} onChange={function (event) { setDataNascimento(event.target.value) }} />
      <CampoTexto nomeExibicao="Endereço" nomeApi="endereco" valorInicial={dadosIniciais.endereco} onChange={function (event) { setEndereco(event.target.value) }} />
      <CampoCheckbox nomeExibicao="Matriculado" nomeApi="matriculado" valorInicial={dadosIniciais.matriculado} onChange={function (event) { setMatriculado(event.target.value) }} />
      <button type="submit">{props.textoBotao}</button>
    </form>
  );
}

export default function AlunosScreen() {
  return (
    <Routes>
      <Route path="/" element={<ListaAlunos />} />
      <Route path="/:id" element={<DetalhesAluno />} />
      <Route path="/cadastro" element={<CadastroAluno />} />
      <Route path="/:id/alteracao" element={<AlteracaoAluno />} />
    </Routes>
  );
}
