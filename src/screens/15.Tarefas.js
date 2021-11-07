import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const api = axios.create({
  baseURL: 'http://localhost:19800/api/tarefas/',
  headers: {'Accept': 'application/json'},
});

function Tarefa(props) {
  function removeTarefa() {
    api.delete(`/${props.id}/`).then(props.quandoRemover);
  }

  return (
    <View style={estilos.tarefa.container}>
      <Text style={estilos.tarefa.texto}>{props.descricao}</Text>
      <Button title="🗑" color="#d65453" onPress={removeTarefa} />
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
      <View style={estilos.novaTarefa.container}>
        <TextInput style={estilos.novaTarefa.campo} placeholder="O que fazer..." onChangeText={setNovaTarefa} ref={campoNovaTarefa} />
        <Button color="green" title="Adicionar" onPress={adicionaTarefa} />
      </View>
      <View>
        {tarefas && tarefas.map(function (tarefa) {
          return <Tarefa key={tarefa.id} quandoRemover={buscaTarefas} {...tarefa} />
        })}
        {tarefas && !tarefas.length && (
          <Text>Nenhuma tarefa, oba!</Text>
        )}
      </View>
    </View>
  );
}

const estilos = {
  novaTarefa: StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      margin: 10,
    },
    campo: {
      borderBottomColor: '#aaa',
      borderBottomWidth: 2,
      flexGrow: 1,
    },
  }),
  tarefa: StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: 'white',
      flex: 1,
      flexDirection: 'row',
      marginHorizontal: 10,
      marginVertical: 5,
    },
    texto: {
      flexGrow: 1,
      marginHorizontal: 10,
    },
  }),
};
