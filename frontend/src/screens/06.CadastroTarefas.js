import axios from "axios";
import React, { useState } from "react";
import Container from '../common/Container';

const api = axios.create({
  baseURL: 'http://localhost:19800/api/tarefas/',
  headers: { 'Accept': 'application/json' },
});

export default function TarefasScreen() {
  const [tarefas, setTarefas] = useState(null);
  const [tarefa, setTarefa] = useState('');

	function onChange(event) {
		setTarefa(event.target.value);
	}

  function buscacarTarefas(tarefas) {
    api.get('/').then(function (resposta) {
      setTarefas(resposta.data);
    });
  }

  function adicionaTarefa() {
    api.post('/', { descricao: tarefa  }).then(window.location.reload());
  }

  !tarefas && buscacarTarefas();

  return (
    <Container title="Tarefas">
        {tarefas && tarefas.map(function (tarefa) {
          return (
           <Tarefa id={tarefa.id} descricao={tarefa.descricao}></Tarefa>
          );
        })}
      <input value={tarefa} onChange={onChange} />
      <button onClick={adicionaTarefa}>cadastrar</button>

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
