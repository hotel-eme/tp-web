import React, { useState } from 'react';
import { Button, Image, Text, View } from 'react-native';

export function JogoNumeroAleatorioScreen() {
  var [numeroAleatorio, setNumeroAleatorio] = useState(null);

  function geraNumeroAleatorio() {
    const numero = Math.floor(Math.random() * 10);
    setNumeroAleatorio(numero);
  }

  return(
    <View>
      <Image
        style={{width: 100, height: 100}}
        source={{uri: 'http://placekitten.com/500/500'}} />
      <Text>Pense em um número de 0 a 10</Text>
      <Button title="Descobrir" onPress={geraNumeroAleatorio} />
      <Text>Resultado: {numeroAleatorio}</Text>
    </View>
  );
}
