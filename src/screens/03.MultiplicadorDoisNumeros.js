import React, {useState} from 'react';
import { Button, Text, View, TextInput } from 'react-native';

export function MultiplicadorDoisNumerosScreen() {
  var [number1, setNumber1] = useState(null);
  var [number2, setNumber2] = useState(null);
  var [resultado, setResultado] = useState(null);

  function calcula(){
    setResultado(number1 * number2);
  }

  return (
    <View>
      <TextInput placeholder="Digite um numero:" onChangeText={setNumber1}/>
      <TextInput placeholder="Digite um numero:" onChangeText={setNumber2}/>
      <Button title="Calcular" onPress={calcula}></Button>
      <Text>Resultado: {resultado}</Text>
    </View>
  );
}
