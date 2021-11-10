import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Button, Text, View } from 'react-native';
import { Formulario, Confirmacao } from "./07.AberturaContaBancaria";

function FormularioScreen({ navigation }) {
  return (
    <View>
      <Formulario confirmacaoCallback={ (nome, idade, sexo, escolaridade, limite, brasileiro) => navigation.navigate('Confimação de dados', {nome, idade, sexo, escolaridade, limite, brasileiro}) } />
    </View>
  );
}

function ConfirmacaoScreen({ route }) {
  return (
    <View>
      <Confirmacao {...route.params} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export function AberturaContaBancariaStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Abertura de conta" component={FormularioScreen} />
        <Stack.Screen name="Confimação de dados" component={ConfirmacaoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
