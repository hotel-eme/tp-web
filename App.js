import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Button, View } from 'react-native';
import { MeuPerfilScreen } from "./src/screens/01.MeuPerfil";
import { ContadorPessoasScreen } from "./src/screens/02.ContadorPessoas";
import { MultiplicadorDoisNumerosScreen } from "./src/screens/03.MultiplicadorDoisNumeros";
import { AlcoolGasolinaScreen } from "./src/screens/04.AlcoolGasolina";
import { CalculoIMCScreen } from "./src/screens/05.CalculoIMC";
import { JogoNumeroAleatorioScreen } from "./src/screens/06.JogoNumeroAleatorio";
import { AberturaContaBancariaScreen } from "./src/screens/07.AberturaContaBancaria";
import { AnuncioParaVendaProdutosScreen } from "./src/screens/08.AnuncioParaVendaProdutos";
import { VagaEmpregoScreen } from "./src/screens/09.VagaEmprego";
import { ConversorMoedasScreen } from "./src/screens/10.ConversorMoedas";
import { AberturaContaBancariaStack } from "./src/screens/11.AberturaContaBancariaStack";
import { MeuPerfilScreenDrawer } from "./src/screens/12.MeuPerfilDrawer";
import { MeuPerfilTab } from "./src/screens/13.MeuPerfilTab";
import { VisualizacaoFraseScreen } from "./src/screens/14.VisualizacaoFrase";
import { TarefasScreen } from "./src/screens/15.Tarefas";
import { MeuCepScreen } from "./src/screens/17.ConsultaCep";
import { ConversorMoedasApiScreen } from "./src/screens/19.ConversorMoedasApi"

const Stack = createNativeStackNavigator();

function HomeScreen(props) {
  return (
    <View>
      <Button title="Meu Perfil" onPress={function () { props.navigation.navigate('Meu Perfil') }} />
      <Button title="Contador de Pessoas" onPress={function () { props.navigation.navigate('Contador de Pessoas') }} />
      <Button title="Multiplicador de Dois Números" onPress={function () { props.navigation.navigate('Multiplicador de Dois Números') }} />
      <Button title="Abastecer com Álcool ou Gasolina" onPress={function () { props.navigation.navigate('Abastecer com Álcool ou Gasolina') }} />
      <Button title="Cálculo de IMC" onPress={function () { props.navigation.navigate('Cálculo de IMC') }} />
      <Button title="Jogo do Número Aleatório" onPress={function () { props.navigation.navigate('Jogo do Número Aleatório') }} />
      <Button title="Abertura de Conta Bancária" onPress={function () { props.navigation.navigate('Abertura de Conta Bancária') }} />
      <Button title="Anúncios Para Venda de Produtos" onPress={function () { props.navigation.navigate('Anúncios Para Venda de Produtos') }} />
      <Button title="Vagas de Emprego TI" onPress={function () { props.navigation.navigate('Vagas de Emprego de TI') }} />
      <Button title="Conversor de Moedas" onPress={function () { props.navigation.navigate('Conversor de Moedas') }} />
      <Button title="Abertura de Conta Bancária (Stack)" onPress={function () { props.navigation.navigate('Abertura de Conta Bancária (Stack)') }} />
      <Button title="Meu Perfil com Drawer" onPress={function () { props.navigation.navigate('Meu Perfil com Drawer') }} />
      <Button title="Meu Perfil com Tab" onPress={function () { props.navigation.navigate('Meu Perfil Tab') }} />
      <Button title="Visualizar a frase com preferências do usuário" onPress={function () { props.navigation.navigate('Frase')}} />
      <Button title="Tarefas" onPress={function () { props.navigation.navigate('Tarefas') }} />
      <Button title="Consultar CEP" onPress={function () { props.navigation.navigate('Consultar CEP') }} />
      <Button title="Conversor de Moedas (API)" onPress={function () { props.navigation.navigate("Conversor de Moedas (API)")}} />
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
        <Stack.Screen name="Abastecer com Álcool ou Gasolina" component={AlcoolGasolinaScreen} />
        <Stack.Screen name="Cálculo de IMC" component={CalculoIMCScreen} />
        <Stack.Screen name="Jogo do Número Aleatório" component={JogoNumeroAleatorioScreen} />
        <Stack.Screen name="Abertura de Conta Bancária" component={AberturaContaBancariaScreen} />
        <Stack.Screen name="Anúncios Para Venda de Produtos" component={AnuncioParaVendaProdutosScreen} />
        <Stack.Screen name="Vagas de Emprego de TI" component={VagaEmpregoScreen} />
        <Stack.Screen name="Conversor de Moedas" component={ConversorMoedasScreen} />
        <Stack.Screen name="Abertura de Conta Bancária (Stack)" component={AberturaContaBancariaStack} />
        <Stack.Screen name="Meu Perfil com Drawer" component={MeuPerfilScreenDrawer} />
        <Stack.Screen name="Meu Perfil Tab" component={MeuPerfilTab} />
        <Stack.Screen name="Frase" component={VisualizacaoFraseScreen} />
        <Stack.Screen name="Tarefas" component={TarefasScreen} />
        <Stack.Screen name="Consultar CEP" component={MeuCepScreen} />
        <Stack.Screen name="Conversor de Moedas (API)" component={ConversorMoedasApiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
