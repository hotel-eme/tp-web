import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Button, Switch, Text, TextInput, View } from 'react-native';

export function Formulario() {
  var [nome, setNome] = useState(null);
  var [idade, setIdade] = useState(null);
  var [sexo, setSexo] = useState(null);
  var [escolaridade, setEscolaridade] = useState(null);
  var [limite, setLimite] = useState(null);
  var [brasileiro, setBrasileiro] = useState(true);
  var [desabilitado, setDesabilitado] = useState(false);
  const limiteMaximo = 50000;

  const opcoesSexo = {
    'm': 'Masculino',
    'f': 'Feminino',
    'x': 'Outro',
  };

  const opcoesEscolaridade = {
    'f-': 'Ensino fundamental incompleto',
    'f+': 'Ensino fundamental completo',
    'm-': 'Ensino médio incompleto',
    'm+': 'Ensino médio completo',
    's-': 'Ensino superior incompleto',
    's+': 'Ensino superior completo',
  }

  return (
    <View>
      <View>
        <Text>Nome:</Text>
        <TextInput
          disabled={desabilitado}
          onChangeText={setNome}
          placeholder="Insira seu nome"
        />
      </View>
      <View>
        <Text>Idade:</Text>
        <TextInput
          disabled={desabilitado}
          keyboardType="numeric"
          onChangeText={setIdade}
          placeholder="Insira sua idade"
        />
      </View>
      <View>
        <Text>Sexo:</Text>
        <Picker
          disabled={desabilitado}
          onValueChange={setSexo}
        >
          <Picker.Item label="Selecione" key={null} />
          {Object.entries(opcoesSexo).map(([valor, texto], i) => (
            <Picker.Item key={i} label={texto} value={valor} />
          ))}
        </Picker>
      </View>
      <View>
        <Text>Escolaridade:</Text>
        <Picker
          disabled={desabilitado}
          onValueChange={setEscolaridade}
        >
          <Picker.Item label="Selecione" />
          {Object.entries(opcoesEscolaridade).map(([valor, texto], i) => (
            <Picker.Item key={i} label={texto} value={valor} />
          ))}
        </Picker>
      </View>
      <View>
        <Text>Limite:</Text>
        <Slider
          disabled={desabilitado}
          maximumValue={limiteMaximo}
          minimumValue={0}
          onValueChange={setLimite}
          step={limiteMaximo / 20}
        />
        <Text>{limite}</Text>
      </View>
      <View>
        <Text>Brasileiro:</Text>
        <Switch
          disabled={desabilitado}
          onValueChange={setBrasileiro}
          value={brasileiro}
        />
      </View>
      <Button
        disabled={desabilitado}
        onPress={() => setDesabilitado(true)}
        title="Confirmar"
      />
    </View>
  );
}

export function AberturaContaBancariaScreen() {
  return (
    <View>
      <Formulario />
    </View>
  )
}
