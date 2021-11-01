import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Button, Switch, Text, TextInput, View } from 'react-native';

export function AberturaContaBancariaScreen() {
  var [nome, setNome] = useState(null);
  var [idade, setIdade] = useState(null);
  var [sexo, setSexo] = useState(null);
  var [escolaridade, setEscolaridade] = useState(null);
  var [limite, setLimite] = useState(null);
  var [brasileiro, setBrasileiro] = useState(true);
  var [exibeDadosInformados, setExibeDadosInformados] = useState(false);
  const limiteMaximo = 50000;

  function confirmaDadosInformados() {
    setExibeDadosInformados(true);
  }

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
        <Picker onValueChange={setSexo}>
          <Picker.Item label="Masculino" value="m" />
          <Picker.Item label="Feminino" value="f" />
          <Picker.Item label="Outro" value="x" />
        </Picker>
      </View>
      <View>
        <Text>Escolaridade:</Text>
        <Picker onValueChange={setEscolaridade}>
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
      <Button onPress={confirmaDadosInformados} title="Confirmar" />
      {exibeDadosInformados &&
      <View>
        <Text>Dados Informados:</Text>
        <Text>Nome: {nome}</Text>
        <Text>Idade: {idade}</Text>
        <Text>Sexo: {sexo}</Text>
        <Text>Escolaridade: {escolaridade}</Text>
        <Text>Limite: {limite}</Text>
        <Text>Brasileiro: {brasileiro ? 'sim' : 'não'}</Text>
      </View>}
    </View>
  );
}
