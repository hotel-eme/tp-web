import axios from "axios";
import React, { useRef, useState } from "react";
import Container from '../common/Container';

const api = axios.create({
  baseURL: 'http://localhost:19800/api/tarefas/',
  headers: { 'Accept': 'application/json' },
});

export default function TarefasScreen() {
  const [tarefas, setTarefas] = useState(null);

  function buscacarTarefas(tarefas) {
    api.get('/').then(function (resposta) {
      setTarefas(resposta.data);
    });
  }

  !tarefas && buscacarTarefas();

  return (
    <Container title="Tarefas">
        {tarefas && tarefas.map(function (tarefa) {
          return (
           <Tarefa id={tarefa.id} descricao={tarefa.descricao}></Tarefa>
          );
        })}
        {tarefas && (tarefas.length)}
    </Container>
  );
}

function Tarefa(props) {
  function removeTarefa() {
    api.delete(`/${props.id}/`).then(window.location.reload());
  }

  return (
    <article>
      <p>{props.descricao}</p>
      <button onClick={removeTarefa}>Remover Tarefa</button>
    </article>
  );
}
