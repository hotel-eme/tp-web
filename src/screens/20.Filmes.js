import React, { useState } from 'react';
import { Button, Text, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';


function ListaFilmes(props) {
  var [filmes, setFilmes] = useState(null);
  var [requisicaoConcluida, setRequisicaoConcluida] = useState(false);

  if (! requisicaoConcluida) {
    axios.get('https://sujeitoprogramador.com/r-api/?api=filmes').then(function (resposta) {
      console.log(resposta.data);
      setFilmes(resposta.data);
      setRequisicaoConcluida(true);
    });
  }
  return (
    <View>
      <Text>Lista de filmes</Text>
        {filmes && filmes.map(function (filme, i) {
        return (
          <View key={i}>
            <Text>Filme: {filme.nome}</Text>
            <Image source={{ uri: filme.foto }} style={{width: 100, height: 100}} />
            <Button title="Ver detalhes" onPress={function () {
              props.navigation.navigate('Detalhes do filme', {
                sinopse: filme.sinopse,
              });
            }} />
          </View>
        );
      })}
    </View>
  )
}

function DetalhesFilme(props) {
  console.log(props);
  return (
    <View>
      <Text style={{ fontWeight: 'bold' }}>Sinopse:</Text>
      <Text>{props.route.params.sinopse}</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export function FilmesScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Lista de Filmes" component={ListaFilmes} />
        <Stack.Screen name="Detalhes do filme" component={DetalhesFilme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
