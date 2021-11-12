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
           <p>{tarefa.descricao}</p>
          );
        })}
        {tarefas && (tarefas.length)}
    </Container>
  );
}
