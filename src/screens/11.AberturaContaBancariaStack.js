import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Button, Text, View } from 'react-native';
import { Formulario } from "./07.AberturaContaBancaria";

function FormularioScreen({ navigation }) {
  return (
    <View>
      <Formulario />
    </View>
  );
}

function ConfirmacaoScreen() {
  return (
    <View>
      <Text>ok</Text>
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
