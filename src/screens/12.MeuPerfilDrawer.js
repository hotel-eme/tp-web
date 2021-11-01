import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";



function DadosPessoaisScreen({ navigation}) {
  return (
    <View>
      <Text>John Doe</Text>
    </View>
  );
}

function FormacaoScreen({ navigation}) {
  return (
    <View>
        <Text>ADS</Text>
    </View>
  );
}

function FotoPerfilScreen({ navigation}) {
  return (
    <View>
        <Image
        style={{width: 200, height: 200}}  // obrigatório para a imagem ser exibida
        source={{uri: 'https://placekitten.com/400/400'}}/>
    </View>
  );
}

function ExperienciaScreen({ navigation}) {
  return (
    <View>
        <Text>Programação</Text>
    </View>
  );
}

function ProjetoScreen({ navigation}) {
  return (
    <View>
        <Text>Apollo 11</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export function MeuPerfilScreenDrawer() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator inicialRouteName="Home">
        <Drawer.Screen name="Foto de Perfil" component={FotoPerfilScreen} />
        <Drawer.Screen name="Dados Pessoais" component={DadosPessoaisScreen} />
        <Drawer.Screen name="Formação" component={FormacaoScreen} />
        <Drawer.Screen name="Experiência" component={ExperienciaScreen} />
        <Drawer.Screen name="Projetos" component={ProjetoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
