import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export function AberturaContaBancariaScreen() {
  var [nome, setNome] = useState(null);
  var [idade, setIdade] = useState(null);
  var [sexo, setSexo] = useState(null);
  var [escolaridade, setEscolaridade] = useState(null);
  var [limite, setLimite] = useState(null);
  var [brasileiro, setBrasileiro] = useState(null);
  const limiteMaximo = 50000;

  return (
    <View>
      <View>
        <Text>Nome:</Text>
        <TextInput onChangeText={setNome}/>
      </View>
      <View>
        <Text>Idade:</Text>
        <TextInput onChangeText={setIdade}/>
      </View>
      <View>
        <Text>Sexo:</Text>
        <TextInput onChangeText={setSexo}/>
      </View>
      <View>
        <Text>Escolaridade:</Text>
        <TextInput onChangeText={setEscolaridade}/>
      </View>
      <View>
        <Text>Limite:</Text>
        <Slider
          onValueChange={setLimite}
          minimumValue={0}
          maximumValue={limiteMaximo}
        />
        <Text>{limite}</Text>
      </View>
      <View>
        <Text>Brasileiro:</Text>
        <TextInput onChangeText={setBrasileiro}/>
      </View>
    </View>
  );
}
