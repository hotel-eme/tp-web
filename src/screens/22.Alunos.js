import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

function ListaAlunos(props) {
  /**
   * Tela de listagem de alunos
   */
  const [alunos, setAlunos] = useState(null);

  if (!alunos) {
    const requisicao = axios.get('http://localhost:19800/api/alunos/');
    requisicao.then(function (resposta) {
      setAlunos(resposta.data);
    });
  }

  return (
    <View>
      {alunos && alunos.map(function (aluno) {
        return <Aluno {...aluno} key={aluno.id} />
      })}
    </View>
  );
}

function Aluno(props) {
  /**
   * Componente para exibir cada aluno em uma lista
   */
  return (
    <View style={estilos.lista.aluno}>
      <Text>{props.nome}</Text>
      <Text>{props.cpf}</Text>
    </View>
  );
}

function DetalhesAluno(props) {
  /**
   * Tela para exibir detalhes de um aluno
   */
  return (
    <View>
      <Text>detalhes</Text>
    </View>
  );
}

function CadastroAluno(props) {
  /**
   * Tela para cadastro de um novo aluno
   */
  return (
    <View>
      <Text>cadastro</Text>
    </View>
  );
}

function AlteracaoAluno(props) {
  /**
   * Tela para alteração de um aluno existente
   */
  return (
    <View>
      <Text>alteração</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export function AlunosScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Lista de Alunos" component={ListaAlunos} />
        <Stack.Screen name="Detalhes do Aluno" component={DetalhesAluno} />
        <Stack.Screen name="Cadastro de Aluno" component={CadastroAluno} />
        <Stack.Screen name="Alteração de Aluno" component={AlteracaoAluno} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const estilos = {
  lista: StyleSheet.create({
    aluno: {
      backgroundColor: 'white',
      marginHorizontal: 10,
      marginTop: 10,
      padding: 10,
    }
  }),
};
