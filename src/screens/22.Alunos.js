import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

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
        return <Aluno key={aluno.id} aluno={aluno} navigation={props.navigation} />
      })}
    </View>
  );
}

function Aluno(props) {
  /**
   * Componente para exibir cada aluno em uma lista
   */
  function abreDetalhes() {
    props.navigation.navigate('Detalhes do Aluno', {...props.aluno});
  }

  return (
    <View style={estilos.lista.aluno}>
      <View style={{flexGrow: 1}}>
        <Text>{props.aluno.nome}</Text>
        <Text>{props.aluno.cpf}</Text>
      </View>
      <Button title="Ver" onPress={abreDetalhes} />
    </View>
  );
}

function DetalhesAluno(props) {
  /**
   * Tela para exibir detalhes de um aluno
   */
  const aluno = props.route.params;

  return (
    <View>
      <Text>Nome do aluno:</Text>
      <Text>{aluno.nome}</Text>
      <Text>CPF do aluno:</Text>
      <Text>{aluno.cpf}</Text>
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
      flex: 1,
      flexDirection: 'row',
    }
  }),
};
