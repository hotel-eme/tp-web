import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const api = axios.create({
  baseURL: 'http://localhost:19800/api/tarefas/',
  headers: {'Accept': 'application/json'},
});

function Tarefa(props) {
  function removeTarefa() {
    api.delete(`/${props.id}/`).then(props.quandoRemover);
  }

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text style={{ flexGrow: 1 }}>{props.descricao}</Text>
      <Button title="Apagar" onPress={removeTarefa} />
    </View>
  );
}

export function TarefasScreen() {
  const campoNovaTarefa = useRef();
  const [novaTarefa, setNovaTarefa] = useState(null);
  const [tarefas, setTarefas] = useState(null);

  function buscaTarefas() {
    api.get('/').then(function (resposta) {
      setTarefas(resposta.data);
    });
  }

  function adicionaTarefa() {
    if (!(novaTarefa && novaTarefa.trim().length)) {
      return;  // Aborta função se não há uma nova tarefa preenchida
    }

    // Cria nova tarefa e atualiza em seguida
    api.post('/', { descricao: novaTarefa }).then(buscaTarefas);

    // Limpa campo
    campoNovaTarefa.current.clear();
  }

  // Busca tarefas ao inicializar o componente
  !tarefas && buscaTarefas();

  return (
    <View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TextInput style={{ flexGrow: 1 }} placeholder="O que fazer..." onChangeText={setNovaTarefa} ref={campoNovaTarefa} />
        <Button title="+" onPress={adicionaTarefa} />
      </View>
      <View>
        {tarefas && tarefas.map(function (tarefa) {
          return <Tarefa key={tarefa.id} quandoRemover={buscaTarefas} {...tarefa} />
        })}
      </View>
    </View>
  );
}
