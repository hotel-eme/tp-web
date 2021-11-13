import axios from "axios";
import React, { useState } from "react";
import Container from '../common/Container';

const api = axios.create({
  baseURL: 'http://localhost:19800/api/tarefas/',
  headers: { 'Accept': 'application/json' },
});

export default function TarefasScreen() {
  const [tarefas, setTarefas] = useState(null);

  function buscarTarefas() {
    api.get('/').then(function (resposta) {
      setTarefas(resposta.data);
    });
  }
  !tarefas && buscarTarefas();

  return (
    <Container title="Tarefas">
      {tarefas && tarefas.map(function (tarefa) {
        return (
          <Tarefa {...tarefa}></Tarefa>
        );
      })}
      {tarefas && (tarefas.length)}
      <NovaTarefa />
    </Container>
  );
}

function Tarefa(props) {

  function removeTarefa() {
    api.delete(`/${props.id}/`).then(function () {
      window.location.reload();
    });
  }

  return (
    <article>
      <p>{props.descricao}</p>
      <button onClick={removeTarefa}>Remover Tarefa</button>
    </article>
  );
}

function NovaTarefa(props) {
  /**
   * Componente para adição de tarefas
   */
  const [tarefa, setTarefa] = useState(null);

  function adicionaTarefa() {
    api.post('/', { descricao: tarefa }).then(function () {
      window.location.reload();
    });
  }

  return (
    <section>
      <input value={tarefa} onChange={function (event) {
        setTarefa(event.target.value);
      }} />
      <button onClick={adicionaTarefa}>cadastrar</button>
    </section>
  );
}
