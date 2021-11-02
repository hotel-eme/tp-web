import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export function AlcoolGasolinaScreen() {
  var [alcool, setAlcool] = useState(null);
  var [gasolina, setGasolina] = useState(null);
  var [combustivel, setCombustivel] = useState (null);
  var [resultado, setResultado] = useState(0);

  function calcula() {
    var combustivel = alcool / gasolina
    setResultado(combustivel);
      if (combustivel < 0.7){
        setCombustivel("Abastecer com Álcool")
      }
      else {
        setCombustivel("Abastecer com Gasolina")
      }
  }

  return (
    <View>
      <img
        style={{width: 200, height: 150}}
        src="../imagens/AlcoolGasolina.png"
        alt="Imagem do posto" />
      <TextInput placeholder="Preço do Álcool:" onChangeText={setAlcool} />
      <TextInput placeholder="Preço da Gasolina:" onChangeText={setGasolina} />
      <Button title="Calcular" onPress={calcula} />
      <Text>Abasteça com: {combustivel}</Text>
    </View>
  );
}
