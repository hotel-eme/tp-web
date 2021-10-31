import React from 'react';
import { Image, Text, View } from 'react-native';


export function MeuPerfilScreen() {
  return (
    <View>
      <Image
        style={{width: 100, height: 100}}  // obrigatório para a imagem ser exibida
        source={{uri: 'https://placekitten.com/500/500'}}/>
      <Text>Dados pessoas:</Text>
      <Text>John Doe</Text>
      <Text>Formação:</Text>
      <Text>ADS</Text>
      <Text>Experiência:</Text>
      <Text>Programador</Text>
      <Text>Projetos:</Text>
      <Text>Apollo 11</Text>
    </View>
  );
}
