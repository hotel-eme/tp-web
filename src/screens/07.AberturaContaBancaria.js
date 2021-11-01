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
          disabled={exibeDadosInformados}
          onChangeText={setNome}
        />
      </View>
      <View>
        <Text>Idade:</Text>
        <TextInput
          disabled={exibeDadosInformados}
          keyboardType="numeric"
          onChangeText={setIdade}
        />
      </View>
      <View>
        <Text>Sexo:</Text>
        <Picker
          disabled={exibeDadosInformados}
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
          disabled={exibeDadosInformados}
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
          disabled={exibeDadosInformados}
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
          disabled={exibeDadosInformados}
          onValueChange={setBrasileiro}
          value={brasileiro}
        />
      </View>
      <Button
        disabled={exibeDadosInformados}
        onPress={() => setExibeDadosInformados(true)}
        title="Confirmar"
      />
      {exibeDadosInformados && <View>
        <Text>Dados Informados:</Text>
        <Text>Nome: {nome}</Text>
        <Text>Idade: {idade}</Text>
        <Text>Sexo: {opcoesSexo[sexo]}</Text>
        <Text>Escolaridade: {opcoesEscolaridade[escolaridade]}</Text>
        <Text>Limite: {limite}</Text>
        <Text>Brasileiro: {brasileiro ? 'sim' : 'não'}</Text>
      </View>}
    </View>
  );
}
