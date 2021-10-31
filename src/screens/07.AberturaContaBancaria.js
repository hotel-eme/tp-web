import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Switch, Text, TextInput, View } from 'react-native';

export function AberturaContaBancariaScreen() {
  var [nome, setNome] = useState(undefined);
  var [idade, setIdade] = useState(undefined);
  var [sexo, setSexo] = useState(undefined);
  var [escolaridade, setEscolaridade] = useState(undefined);
  var [limite, setLimite] = useState(0);
  var [brasileiro, setBrasileiro] = useState(true);
  const limiteMaximo = 50000;

  return (
    <View>
      <View>
        <Text>Nome:</Text>
        <TextInput onChangeText={setNome} value={nome}/>
      </View>
      <View>
        <Text>Idade:</Text>
        <TextInput onChangeText={setIdade} value={idade}/>
      </View>
      <View>
        <Text>Sexo:</Text>
        <Picker onValueChange={setSexo} value={sexo}>
          <Picker.Item label="Masculino" value="m" />
          <Picker.Item label="Feminino" value="f" />
          <Picker.Item label="Outro" value="x" />
        </Picker>
      </View>
      <View>
        <Text>Escolaridade:</Text>
        <Picker onValueChange={setEscolaridade} value={escolaridade}>
          <Picker.Item label="Ensino fundamental incompleto" value="f-" />
          <Picker.Item label="Ensino fundamental completo" value="f+" />
          <Picker.Item label="Ensino médio incompleto" value="m-" />
          <Picker.Item label="Ensino médio completo" value="m+" />
          <Picker.Item label="Ensino superior incompleto" value="s-" />
          <Picker.Item label="Ensino superior completo" value="s+" />
        </Picker>
      </View>
      <View>
        <Text>Limite:</Text>
        <Slider
          onValueChange={setLimite}
          value={limite}
          minimumValue={0}
          maximumValue={limiteMaximo}
          step={limiteMaximo / 20}
        />
        <Text>{limite}</Text>
      </View>
      <View>
        <Text>Brasileiro:</Text>
        <Switch onValueChange={setBrasileiro} value={brasileiro} />
      </View>
    </View>
  );
}
