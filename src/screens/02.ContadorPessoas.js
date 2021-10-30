import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export function ContadorPessoasScreen() {
  var [contador, setContador] = useState(0);

  function adicionaPessoa() {
    setContador(contador + 1);
  }

  function removePessoa() {
    setContador(contador - 1);
  }

  return (
    <View>
      <Text style={{ fontSize: 40 }}>{contador}</Text>
      <Button title="+" onPress={adicionaPessoa}></Button>
      <Button title="-" onPress={removePessoa}></Button>
    </View>
  );
}
