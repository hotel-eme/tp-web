import React, { useState } from 'react';
import { TextInput, View, Text, Button } from 'react-native';

export function MeuCepScreen() {
  var [cep, setCep] = useState(null);
  var [resultado, setResultado] = useState(null);

  function buscaCep() {
    setResultado(cep);
  }

  return (
    <View>
      <TextInput placeholder="Digite um CEP, sem pontos:" onChangeText={setCep} />
      <Button title="Exibir" onPress={buscaCep} />
      <Text>Resultado: {resultado}</Text>
      <Text>cep: {cep}</Text>
    </View>
  );
}
