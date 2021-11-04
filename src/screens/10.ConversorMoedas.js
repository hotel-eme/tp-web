import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export function ConversorMoedasScreen() {
  var [valor, setValor] = useState(null);
  var [moedaOrigem, setMoedaOrigem] = useState(null);
  var [moedaDestino, setMoedaDestino] = useState(null);

  return (
    <View>
      <Text>Conversor de moedas: Dolar, Real e Euro</Text>
      <Text>Valor:</Text>
      <TextInput onChangeText={setValor} />
      <Text>De:</Text>
      <Picker onValueChange={setMoedaOrigem}>
        <Picker.Item label="Selecione" />
        <Picker.Item value="USD" label="Dólar" />
        <Picker.Item value="EUR" label="Euro" />
        <Picker.Item value="BRL" label="Real" />
      </Picker>
      <Text>Para:</Text>
      <Picker onValueChange={setMoedaDestino}>
        <Picker.Item label="Selecione" />
        <Picker.Item value="USD" label="Dólar" />
        <Picker.Item value="EUR" label="Euro" />
        <Picker.Item value="BRL" label="Real" />
      </Picker>
      <Button title="Converter"></Button>
    </View>
  );
}

