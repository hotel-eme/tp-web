import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Button, Switch, Text, TextInput, View } from 'react-native';

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

const limiteMaximo = 50000;

export function Formulario(props) {
  var [nome, setNome] = useState(null);
  var [idade, setIdade] = useState(null);
  var [sexo, setSexo] = useState(null);
  var [escolaridade, setEscolaridade] = useState(null);
  var [limite, setLimite] = useState(null);
  var [brasileiro, setBrasileiro] = useState(true);
  var [desabilitado, setDesabilitado] = useState(false);

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
        onPress={function () {
          setDesabilitado(true);
          props.confirmacaoCallback(nome, idade, sexo, escolaridade, limite, brasileiro);
        }}
        title="Confirmar"
      />
    </View>
  );
}

export function Confirmacao(props) {
  return <View>
    <Text>Dados Informados:</Text>
    <Text>Nome: {props.nome}</Text>
    <Text>Idade: {props.idade}</Text>
    <Text>Sexo: {opcoesSexo[props.sexo]}</Text>
    <Text>Escolaridade: {opcoesEscolaridade[props.escolaridade]}</Text>
    <Text>Limite: {props.limite}</Text>
    <Text>Brasileiro: {props.brasileiro ? 'sim' : 'não'}</Text>
  </View>
}

export function AberturaContaBancariaScreen() {
  var [dadosInformados, setDadosInformados] = useState(null);

  return (
    <View>
      <Formulario confirmacaoCallback={ (nome, idade, sexo, escolaridade, limite, brasileiro) => setDadosInformados({nome, idade, sexo, escolaridade, limite, brasileiro}) } />
      {dadosInformados && <Confirmacao {...dadosInformados} />}
    </View>
  )
}
