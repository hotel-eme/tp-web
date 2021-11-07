import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import React, { useState } from "react";
import { Text, View } from "react-native";

function ListaAlunos(props) {
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
        return <Text>{aluno.nome}</Text>
      })}
    </View>
  );
}

function DetalhesAluno(props) {
  return (
    <View>
      <Text>detalhes</Text>
    </View>
  );
}

function CadastroAluno(props) {
  return (
    <View>
      <Text>cadastro</Text>
    </View>
  );
}

function AlteracaoAluno(props) {
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
