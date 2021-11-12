import { Route, Routes } from 'react-router-dom';
import Container from "../common/Container";



function ListaAlunos(props) {
  /**
   * Tela de listagem de alunos
   */
  return (
    <Container>
      listagem de alunos
    </Container>
  );
}

function Aluno(props) {
  /**
   * Componente para exibir cada aluno em uma lista
   */
  return (
    <Container>
      exibe um aluno
    </Container>
  );
}

function DetalhesAluno(props) {
  /**
   * Tela para exibir detalhes de um aluno
   */
  return (
    <Container>
      detalhe de alunos
    </Container>
  );
}

function CadastroAluno(props) {
  /**
   * Tela para cadastro de um novo aluno
   */
  return (
    <Container>
      cadastro de alunos
    </Container>
  );
}

function AlteracaoAluno(props) {
  /**
   * Tela para alteração de um aluno existente
   */
  return (
    <Container>
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
      formulario de AlunosScreen
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
