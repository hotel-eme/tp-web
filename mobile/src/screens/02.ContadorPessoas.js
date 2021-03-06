import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export function ContadorPessoasScreen() {
  var [contador, setContador] = useState(0);

  function adicionaPessoa() {
    setContador(contador + 1);
  }

  function removePessoa() {
    setContador(Math.max(0, contador - 1));
  }

  return (
    <View>
      <Text style={{ fontSize: 40 }}>{contador}</Text>
      <Button color="green" title="Adiciona" onPress={adicionaPessoa}></Button>
      <Button color="red" title="Remove" onPress={removePessoa} disabled={contador == 0}></Button>
    </View>
  );
}
