import React from 'react';
import { Button, Text, View } from 'react-native';

export function ConversorMoedasScreen() {
  return (
    <View>
      <Text>Conversor de moedas: Dolar, Real e Euro</Text>
      <Text>Valor: </Text>
      <Text>De: </Text>
      <Text>Para: </Text>
      <Button title="Converter"></Button>
    </View>
  );
}

