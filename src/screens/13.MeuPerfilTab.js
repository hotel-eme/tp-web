import React from 'react';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";



function DadosPessoaisScreen() {
  return (
    <View>
      <Text>John Doe</Text>
    </View>
  );
}

function FormacaoScreen() {
  return (
    <View>
      <Text>ADS</Text>
    </View>
  );
}

function FotoPerfilScreen() {
  return (
    <View>
      <Image
        style={{width: 200, height: 200}}  // obrigatório para a imagem ser exibida
        source={{uri: 'https://placekitten.com/400/400'}} />
    </View>
  );
}

function ExperienciaScreen() {
  return (
    <View>
      <Text>Programação</Text>
    </View>
  );
}

function ProjetoScreen() {
  return (
    <View>
      <Text>Apollo 11</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export function MeuPerfilTab() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator inicialRouteName="Home">
        <Tab.Screen name="Foto de Perfil" component={FotoPerfilScreen} />
        <Tab.Screen name="Dados Pessoais" component={DadosPessoaisScreen} />
        <Tab.Screen name="Formação" component={FormacaoScreen} />
        <Tab.Screen name="Experiência" component={ExperienciaScreen} />
        <Tab.Screen name="Projetos" component={ProjetoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
