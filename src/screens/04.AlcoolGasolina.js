import React, { useState } from 'react';
import { Button, Text, TextInput, View, Image } from 'react-native';

export function AlcoolGasolinaScreen() {
  var [alcool, setAlcool] = useState(null);
  var [gasolina, setGasolina] = useState(null);
  var [combustivel, setCombustivel] = useState(null);

  function calcula() {
    var combustivel = alcool / gasolina
    if (combustivel < 0.7) {
      setCombustivel("Abastecer com Álcool")
    }
    else {
      setCombustivel("Abastecer com Gasolina");
    }
  }

  return (
    <View>
      <Image style={{ width: 200, height: 150 }} source={require('../imagens/posto.png')} />
      <TextInput placeholder="Preço do Álcool:" onChangeText={setAlcool} />
      <TextInput placeholder="Preço da Gasolina:" onChangeText={setGasolina} />
      <Button title="Calcular" onPress={calcula} />
      <Text>Abasteça com: {combustivel}</Text>
    </View>
  );
}
