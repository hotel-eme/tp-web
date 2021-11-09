import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

function ListaAlunos(props) {
  /**
   * Tela de listagem de alunos
   */
  const [alunos, setAlunos] = useState(null);

  function buscaAlunos() {
    const requisicao = axios.get('http://localhost:19800/api/alunos/');
    requisicao.then(function (resposta) {
      setAlunos(resposta.data);
    });
  }

  // Busca alunos com a API ao carregar o componente
  if (!alunos) {
    buscaAlunos();
  }

  return (
    <View style={estilos.comum.tela}>
      <ScrollView style={estilos.comum.conteudo}>
        {alunos && alunos.map(function (aluno) {
          return <Aluno
            key={aluno.id}
            aluno={aluno}
            navigation={props.navigation}
            aoAlterar={buscaAlunos}
            aoRemover={buscaAlunos}
          />
        })}
      </ScrollView>
      <View style={estilos.comum.opcoes}>
        <Button style={estilos.comum.opcao} title="Adicionar aluno" onPress={function () {
          props.navigation.navigate('Cadastro de Aluno', { aoAdicionar: buscaAlunos });
        }} />
      </View>
    </View>
  );
}

function Aluno(props) {
  /**
   * Componente para exibir cada aluno em uma lista
   */
  function abreDetalhes() {
    props.navigation.navigate('Detalhes do Aluno', {
      aluno: props.aluno,
      aoRemover: props.aoRemover,
      aoAlterar: props.aoAlterar,
    });
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
  const aluno = props.route.params.aluno;

  function removerAluno() {
    const requisicao = axios.delete(`http://localhost:19800/api/alunos/${aluno.id}/`);
    requisicao.then(function () {
      props.navigation.navigate("Lista de Alunos");
      props.route.params.aoRemover();
    });
  }

  function vaiParaAlteracaoAluno() {
    props.navigation.navigate("Alteração de Aluno", {
      aluno: aluno,
      aoAlterar: props.route.params.aoAlterar,
    });
  }

  return (
    <View style={estilos.comum.tela}>
      <ScrollView style={estilos.comum.conteudo}>
        <Text>Nome do aluno:</Text>
        <Text>{aluno.nome}</Text>
        <Text>CPF do aluno:</Text>
        <Text>{aluno.cpf}</Text>
      </ScrollView>
      <View style={estilos.comum.opcoes}>
        <Button style={estilos.comum.opcao} title="Alterar" onPress={vaiParaAlteracaoAluno} />
        <Button style={estilos.comum.opcao} title="Remover" onPress={removerAluno} color="#d65453" />
      </View>
    </View>
  );
}

function CadastroAluno(props) {
  /**
   * Tela para cadastro de um novo aluno
   */
  function cadastrarAluno(dados) {
    const requisicao = axios.post('http://localhost:19800/api/alunos/', dados);
    requisicao.then(function () {
      props.navigation.navigate('Lista de Alunos');
      props.route.params.aoAdicionar();
    });
  }

  return (
    <View style={estilos.comum.tela}>
      <ScrollView style={estilos.comum.conteudo}>
        <FormularioAluno tituloBotao="Cadastrar" aoSubmeter={cadastrarAluno} />
      </ScrollView>
    </View>
  );
}

function AlteracaoAluno(props) {
  /**
   * Tela para alteração de um aluno existente
   */
  const aluno = props.route.params.aluno;

  function alterarAluno(dados) {
    const requisicao = axios.put(`http://localhost:19800/api/alunos/${aluno.id}/`, dados);
    requisicao.then(function () {
      props.navigation.navigate('Lista de Alunos');
      props.route.params.aoAlterar();
    });
  }

  return (
    <View style={estilos.comum.tela}>
      <ScrollView style={estilos.comum.conteudo}>
        <FormularioAluno tituloBotao="Alterar" aluno={aluno} aoSubmeter={alterarAluno} />
      </ScrollView>
    </View>
  );
}

function FormularioAluno(props) {
  /**
   * Formulário para cadastrar ou alterar um aluno
   */
  const aluno = props.aluno || {};
  const [nomeInserido, setNomeInserido] = useState(aluno.nome);
  const [cpfInserido, setCpfInserido] = useState(aluno.cpf);

  return (
    <View>
      <Text>Nome:</Text>
      <TextInput style={estilos.comum.campo} value={nomeInserido} onChangeText={setNomeInserido} />
      <Text>CPF:</Text>
      <TextInput style={estilos.comum.campo} value={cpfInserido} onChangeText={setCpfInserido} />
      <Button title={props.tituloBotao} onPress={function () {
        const dadosInseridos = {
          nome: nomeInserido,
          cpf: cpfInserido,
        };
        props.aoSubmeter(dadosInseridos);
      }} />
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
  comum: StyleSheet.create({
    tela: {
      flex: 1,
    },
    conteudo: {
      padding: 10,
      flexGrow: 1,
    },
    opcoes: {
      padding: 10,
    },
    campo: {
      backgroundColor: 'white',
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      marginBottom: 10,
      padding: 5,
    },
  }),
  lista: StyleSheet.create({
    aluno: {
      backgroundColor: 'white',
      marginBottom: 10,
      padding: 10,
      flex: 1,
      flexDirection: 'row',
    }
  }),
};
