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
import { PerfilDevScreen} from "./src/screens/18.PerfilDev";
import { ConversorMoedasApiScreen } from "./src/screens/19.ConversorMoedasApi"
import { ListaComprasScreen} from "./src/screens/16.ListaCompras"
import { FilmesScreen } from "./src/screens/20.Filmes";
import { AlunosScreen } from "./src/screens/22.Alunos";

const Stack = createNativeStackNavigator();

function HomeScreen(props) {
  return (
    <View>
      <Button title="Meu Perfil" onPress={function () { props.navigation.navigate('Meu Perfil') }} />
      <Button title="Contador de Pessoas" onPress={function () { props.navigation.navigate('Contador de Pessoas') }} />
      <Button title="Multiplicador de Dois N??meros" onPress={function () { props.navigation.navigate('Multiplicador de Dois N??meros') }} />
      <Button title="Abastecer com ??lcool ou Gasolina" onPress={function () { props.navigation.navigate('Abastecer com ??lcool ou Gasolina') }} />
      <Button title="C??lculo de IMC" onPress={function () { props.navigation.navigate('C??lculo de IMC') }} />
      <Button title="Jogo do N??mero Aleat??rio" onPress={function () { props.navigation.navigate('Jogo do N??mero Aleat??rio') }} />
      <Button title="Abertura de Conta Banc??ria" onPress={function () { props.navigation.navigate('Abertura de Conta Banc??ria') }} />
      <Button title="An??ncios Para Venda de Produtos" onPress={function () { props.navigation.navigate('An??ncios Para Venda de Produtos') }} />
      <Button title="Vagas de Emprego TI" onPress={function () { props.navigation.navigate('Vagas de Emprego de TI') }} />
      <Button title="Conversor de Moedas" onPress={function () { props.navigation.navigate('Conversor de Moedas') }} />
      <Button title="Abertura de Conta Banc??ria (Stack)" onPress={function () { props.navigation.navigate('Abertura de Conta Banc??ria (Stack)') }} />
      <Button title="Meu Perfil com Drawer" onPress={function () { props.navigation.navigate('Meu Perfil com Drawer') }} />
      <Button title="Meu Perfil com Tab" onPress={function () { props.navigation.navigate('Meu Perfil Tab') }} />
      <Button title="Visualizar a frase com prefer??ncias do usu??rio" onPress={function () { props.navigation.navigate('Frase')}} />
      <Button title="Tarefas" onPress={function () { props.navigation.navigate('Tarefas') }} />
      <Button title="Consultar CEP" onPress={function () { props.navigation.navigate('Consultar CEP') }} />
      <Button title="Consulta Perfil Dev" onPress={function () { props.navigation.navigate('Perfil Dev') }} />
      <Button title="Conversor de Moedas (API)" onPress={function () { props.navigation.navigate("Conversor de Moedas (API)")}} />
      <Button title="Lista de Compras" onPress={function () { props.navigation.navigate("Lista de Compras")}} />
      <Button title="Filmes" onPress={function () { props.navigation.navigate('Filmes') }} />
      <Button title="Alunos (API)" onPress={function () { props.navigation.navigate("Alunos (API)")}} />
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
        <Stack.Screen name="Multiplicador de Dois N??meros" component={MultiplicadorDoisNumerosScreen} />
        <Stack.Screen name="Abastecer com ??lcool ou Gasolina" component={AlcoolGasolinaScreen} />
        <Stack.Screen name="C??lculo de IMC" component={CalculoIMCScreen} />
        <Stack.Screen name="Jogo do N??mero Aleat??rio" component={JogoNumeroAleatorioScreen} />
        <Stack.Screen name="Abertura de Conta Banc??ria" component={AberturaContaBancariaScreen} />
        <Stack.Screen name="An??ncios Para Venda de Produtos" component={AnuncioParaVendaProdutosScreen} />
        <Stack.Screen name="Vagas de Emprego de TI" component={VagaEmpregoScreen} />
        <Stack.Screen name="Conversor de Moedas" component={ConversorMoedasScreen} />
        <Stack.Screen name="Abertura de Conta Banc??ria (Stack)" component={AberturaContaBancariaStack} />
        <Stack.Screen name="Meu Perfil com Drawer" component={MeuPerfilScreenDrawer} />
        <Stack.Screen name="Meu Perfil Tab" component={MeuPerfilTab} />
        <Stack.Screen name="Frase" component={VisualizacaoFraseScreen} />
        <Stack.Screen name="Tarefas" component={TarefasScreen} />
        <Stack.Screen name="Consultar CEP" component={MeuCepScreen} />
        <Stack.Screen name="Perfil Dev" component={PerfilDevScreen} />
        <Stack.Screen name="Conversor de Moedas (API)" component={ConversorMoedasApiScreen} />
        <Stack.Screen name="Lista de Compras" component={ListaComprasScreen} />
        <Stack.Screen name="Filmes" component={FilmesScreen} />
        <Stack.Screen name="Alunos (API)" component={AlunosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
