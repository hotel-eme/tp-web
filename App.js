import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Button, View } from 'react-native';
import { MeuPerfilScreen } from "./src/screens/01.MeuPerfil";
import { ContadorPessoasScreen } from "./src/screens/02.ContadorPessoas";
import { MultiplicadorDoisNumerosScreen } from "./src/screens/03.MultiplicadorDoisNumeros";
import { CalculoIMCScreen } from "./src/screens/05.CalculoIMC";
import { AberturaContaBancariaScreen } from "./src/screens/07.AberturaContaBancaria";
import { AnuncioParaVendaProdutosScreen } from "./src/screens/08.AnuncioParaVendaProdutos";
import { VagaEmpregoScreen } from "./src/screens/09.VagaEmprego";
import { MeuPerfilScreenDrawer } from "./src/screens/12.MeuPerfilDrawer";
import { MeuPerfilTab } from "./src/screens/13.MeuPerfilTab";
import { MeuCepScreen } from "./src/screens/17.ConsultaCep";
import { filmesScreen } from "./src/screens/20.filmes";

const Stack = createNativeStackNavigator();

function HomeScreen(props) {
  return (
    <View>
      <Button title="Meu Perfil" onPress={function () { props.navigation.navigate('Meu Perfil') }} />
      <Button title="Contador de Pessoas" onPress={function () { props.navigation.navigate('Contador de Pessoas') }} />
      <Button title="Multiplicador de Dois Números" onPress={function () { props.navigation.navigate('Multiplicador de Dois Números') }} />
      <Button title="Cálculo de IMC" onPress={function () { props.navigation.navigate('Cálculo de IMC') }} />
      <Button title="Abertura de Conta Bancária" onPress={function () { props.navigation.navigate('Abertura de Conta Bancária') }} />
      <Button title="Anúncios Para Venda de Produtos" onPress={function () { props.navigation.navigate('Anúncios Para Venda de Produtos') }} />
      <Button title="Vagas de Emprego TI" onPress={function () { props.navigation.navigate('Vagas de Emprego de TI') }} />
      <Button title="Meu Perfil com Drawer" onPress={function () { props.navigation.navigate('Meu Perfil com Drawer') }} />
      <Button title="Meu Perfil com Tab" onPress={function () { props.navigation.navigate('Meu Perfil Tab') }} />
      <Button title="Consultar CEP" onPress={function () { props.navigation.navigate('Consultar CEP') }} />
      <Button title="Filmes" onPress={function () { props.navigation.navigate('Filmes') }} />
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
        <Stack.Screen name="Cálculo de IMC" component={CalculoIMCScreen} />
        <Stack.Screen name="Abertura de Conta Bancária" component={AberturaContaBancariaScreen} />
        <Stack.Screen name="Anúncios Para Venda de Produtos" component={AnuncioParaVendaProdutosScreen} />
        <Stack.Screen name="Vagas de Emprego de TI" component={VagaEmpregoScreen} />
        <Stack.Screen name="Meu Perfil com Drawer" component={MeuPerfilScreenDrawer} />
        <Stack.Screen name="Meu Perfil Tab" component={MeuPerfilTab} />
        <Stack.Screen name="Consultar CEP" component={MeuCepScreen} />
        <Stack.Screen name="Filmes" component={filmesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
