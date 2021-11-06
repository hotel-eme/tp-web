import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export function ConversorMoedasApiScreen() {
  var [valor, setValor] = useState(null);
  var [moedaOrigem, setMoedaOrigem] = useState(null);
  var [moedaDestino, setMoedaDestino] = useState(null);
  var [resultado, setResultado] = useState(null);

  function converterMoeda() {
    const requisicao = axios.get(`https://economia.awesomeapi.com.br/json/last/${moedaOrigem}-${moedaDestino}`);
    requisicao.then(function (resposta) {
      setResultado(resposta.data[`${moedaOrigem}${moedaDestino}`].ask);
    });
  }


  return (
    <View>
      <Text>Conversor de moedas: Dolar, Real, Euro e Bitcoin</Text>
      <Text>Valor:</Text>
      <TextInput onChangeText={setValor} />
      <Text>De:</Text>
      <Picker onValueChange={setMoedaOrigem}>
        <Picker.Item label="Selecione" />
        <Picker.Item value="USD" label="Dólar" />
        <Picker.Item value="EUR" label="Euro" />
        <Picker.Item value="BRL" label="Real" />
        <Picker.Item value="BTC" label="Bitcoin" />
      </Picker>
      <Text>Para:</Text>
      <Picker onValueChange={setMoedaDestino}>
        <Picker.Item label="Selecione" />
        <Picker.Item value="USD" label="Dólar" />
        <Picker.Item value="EUR" label="Euro" />
        <Picker.Item value="BRL" label="Real" />
        <Picker.Item value="BTC" label="Bitcoin" />
      </Picker>
      <Button title="Converter" onPress={converterMoeda}></Button>
      {resultado && <Text>Resultado: {moedaDestino} {resultado}</Text>}
    </View>
  );
}

