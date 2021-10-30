import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Button, View } from 'react-native';
import { MeuPerfilScreen } from "./src/screens/01.MeuPerfil";

const Stack = createNativeStackNavigator();

function HomeScreen(props) {
  return (
    <View>
      <Button title="Meu Perfil" onPress={function () { props.navigation.navigate('Meu Perfil') }} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Meu Perfil" component={MeuPerfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
