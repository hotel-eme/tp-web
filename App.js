import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Button, View } from 'react-native';
import { MeuPerfilScreen } from "./src/screens/01.MeuPerfil";
import { ContadorPessoasScreen } from "./src/screens/02.ContadorPessoas";

const Stack = createNativeStackNavigator();

function HomeScreen(props) {
  return (
    <View>
      <Button title="Meu Perfil" onPress={function () { props.navigation.navigate('Meu Perfil') }} />
      <Button title="Contador de Pessoas" onPress={function () { props.navigation.navigate('Contador de Pessoas') }} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Meu Perfil" component={MeuPerfilScreen} />
        <Stack.Screen name="Contador de Pessoas" component={ContadorPessoasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
