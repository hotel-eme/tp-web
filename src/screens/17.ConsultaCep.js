import axios from 'axios';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export function MeuCepScreen() {
  var [cep, setCep] = useState(null);
  var [logradouro, setLogradouro] = useState(null);
  var [bairro, setBairro] = useState(null);
  var [complemento, setComplemento] = useState(null);
  var [localidade, setlocalidade] = useState(null);
  var [uf, setUf] = useState(null);
  var [ddd, setDdd] = useState(null);

  function trataResposta(response) {
    setDdd(response.data.ddd);
    setUf(response.data.uf);
    setlocalidade(response.data.localidade);
    setComplemento(response.data.complemento);
    setBairro(response.data.bairro);
    setLogradouro(response.data.logradouro);
  }

  function buscaCep() {
    axios({
      method: 'get',
      url: `https://viacep.com.br/ws/${cep}/json/`,
    }).then(trataResposta);
  }

  return (
    <View>
      <TextInput placeholder="Digite um CEP, sem pontos:" onChangeText={setCep} />
      <Button title="Exibir" onPress={buscaCep} />
      <Text>Logradouro: {logradouro}</Text>
      <Text>Bairro: {bairro}</Text>
      <Text>Complemento: {complemento}</Text>
      <Text>Localidade: {localidade}</Text>
      <Text>UF: {uf}</Text>
      <Text>DDD: {ddd}</Text>
    </View>
  );
}
