import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const api = axios.create({
  baseURL: 'http://localhost:19800/api/tarefas/',
  headers: {'Accept': 'application/json'},
});

function Tarefa({ descricao }) {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text style={{ flexGrow: 1 }}>{descricao}</Text>
      <Button title="Apagar" />
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

    // Atualiza coleção de tarefas
    setTarefas([...tarefas, {
      descricao: novaTarefa.trim(),
    }]);

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
          return <Tarefa key={tarefa.id} descricao={tarefa.descricao} />
        })}
      </View>
    </View>
  );
}
