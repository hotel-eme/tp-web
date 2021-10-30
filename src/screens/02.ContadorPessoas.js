import React from 'react';
import { Button, Text, View } from 'react-native';

export function ContadorPessoasScreen() {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>0</Text>
      <Button title="+"></Button>
      <Button title="-"></Button>
    </View>
  );
}
