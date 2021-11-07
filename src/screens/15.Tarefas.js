import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const api = axios.create({
  baseURL: 'http://localhost:19800/api/tarefas/',
  headers: { 'Accept': 'application/json' },
});

export function TarefasScreen() {
  /**
   * Componente principal
   */
  const [tarefas, setTarefas] = useState(null);

  function buscaTarefas() {
    api.get('/').then(function (resposta) {
      setTarefas(resposta.data);
    });
  }

  // Busca tarefas ao inicializar o componente
  !tarefas && buscaTarefas();

  return (
    <View>
      <NovaTarefa aoAdicionar={buscaTarefas} />
      <View>
        {tarefas && tarefas.map(function (tarefa) {
          return (
            <Tarefa key={tarefa.id} aoRemover={buscaTarefas} {...tarefa} />
          );
        })}
        {tarefas && (tarefas.length
          ? <Text style={estilos.lista.resumo}>{tarefas.length} tarefas.</Text>
          : <Text style={estilos.lista.resumo}>Nenhuma tarefa, oba!</Text>
        )}
      </View>
    </View>
  );
}

function Tarefa(props) {
  /**
   * Componente para exibir cada tarefa
   */
  function removeTarefa() {
    // Remove tarefa e executa callback em seguida
    api.delete(`/${props.id}/`).then(props.aoRemover);
  }

  return (
    <View style={estilos.tarefa.container}>
      <Text style={estilos.tarefa.texto}>{props.descricao}</Text>
      <Button title="🗑" color="#d65453" onPress={removeTarefa} />
    </View>
  );
}

function NovaTarefa(props) {
  /**
   * Componente responsável pela criação de tarefas
   */
  const campoNovaTarefa = useRef();
  const [novaTarefa, setNovaTarefa] = useState(null);

  function tarefaValida() {
    /**
     * Valida tarefa preenchida
     */
    if (!novaTarefa) return false;  // Se nulo
    if (!novaTarefa.trim().length) return false;  // Se vazio, mesmo com espaços
    return true;
  }

  function adicionaTarefa() {
    if (!tarefaValida()) {
      return;  // Aborta função se tarefa não é válida
    }

    // Cria nova tarefa e executa callback em seguida
    api.post('/', { descricao: novaTarefa }).then(props.aoAdicionar);

    // Limpa memória
    campoNovaTarefa.current.clear();  // Esvazia campo de texto
    setNovaTarefa(null);  // Esvazia tarefa digita anteriormente
  }

  return (
    <View style={estilos.novaTarefa.container}>
      <TextInput
        ref={campoNovaTarefa}
        style={estilos.novaTarefa.campo}
        placeholder="O que fazer..."
        onChangeText={setNovaTarefa}
      />
      <Button
        color="green"
        title="Adicionar"
        onPress={adicionaTarefa}
        disabled={!tarefaValida()}  // Desativa botão quando o campo está vazio
      />
    </View>
  );
}

const estilos = {
  lista: StyleSheet.create({
    resumo: {
      margin: 10,
    },
  }),
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
