import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export function ConversorMoedasScreen() {
  return (
    <View>
      <Text>Conversor de moedas: Dolar, Real e Euro</Text>
      <Text>Valor:</Text>
      <TextInput />
      <Text>De:</Text>
      <Picker>
        <Picker.Item label="Selecione" />
        <Picker.Item value="USD" label="Dólar" />
        <Picker.Item value="EUR" label="Euro" />
        <Picker.Item value="BRL" label="Real" />
      </Picker>
      <Text>Para:</Text>
      <Picker>
        <Picker.Item label="Selecione" />
        <Picker.Item value="USD" label="Dólar" />
        <Picker.Item value="EUR" label="Euro" />
        <Picker.Item value="BRL" label="Real" />
      </Picker>
      <Button title="Converter"></Button>
    </View>
  );
}

