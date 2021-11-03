import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Button, View } from 'react-native';
import { MeuPerfilScreen } from "./src/screens/01.MeuPerfil";
import { ContadorPessoasScreen } from "./src/screens/02.ContadorPessoas";
import { MultiplicadorDoisNumerosScreen } from "./src/screens/03.MultiplicadorDoisNumeros";
import { AberturaContaBancariaScreen } from "./src/screens/07.AberturaContaBancaria";
import { MeuPerfilScreenDrawer } from "./src/screens/12.MeuPerfilDrawer";

const Stack = createNativeStackNavigator();

function HomeScreen(props) {
  return (
    <View>
      <Button title="Meu Perfil" onPress={function () { props.navigation.navigate('Meu Perfil') }} />
      <Button title="Contador de Pessoas" onPress={function () { props.navigation.navigate('Contador de Pessoas') }} />
      <Button title="Multiplicador de Dois Números" onPress={function () { props.navigation.navigate('Multiplicador de Dois Números') }} />
      <Button title="Abertura de Conta Bancária" onPress={function () { props.navigation.navigate('Abertura de Conta Bancária') }} />
      <Button title="Meu Perfil com Drawer" onPress={function () { props.navigation.navigate('Meu Perfil com Drawer') }} />

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
        <Stack.Screen name="Multiplicador de Dois Números" component={MultiplicadorDoisNumerosScreen} />
        <Stack.Screen name="Abertura de Conta Bancária" component={AberturaContaBancariaScreen} />
        <Stack.Screen name="Meu Perfil com Drawer" component={MeuPerfilScreenDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
