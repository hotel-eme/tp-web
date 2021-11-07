import axios from 'axios';
import React, { useState } from 'react';
import { Button, Text, TextInput, View, Image} from 'react-native';

export function PerfilDevScreen() {
  var [foto, setFoto] = useState(null);
  var [id, setId] = useState(null);
  var [nome, setNome] = useState(null);
  var [repositorio, setRepositorio] = useState(null);
  var [dataCriacao, setDataCriacao] = useState(null);
  var [seguidores, setSeguidores] = useState(null);
  var [seguindo, setSeguindo] = useState(null);


  function trataResposta(response) {
    setFoto(response.data.avatar_url);
    setNome(response.data.name);
    setRepositorio(response.data.public_repos);
    setDataCriacao(response.data.created_at);
    setSeguidores(response.data.followers);
    setSeguindo(response.data.following);
  }

  function buscaDev() {
    axios({
      method: 'get',
      url: `https://api.github.com/users/${id}`,
    }).then(trataResposta);
  }

  return (
    <View>
      <Image
        style={{width: 100, height: 100}}  // obrigatório para a imagem ser exibida
        source={{uri: foto}}/>
      <TextInput placeholder="Digite o ID do Github" onChangeText={setId} />
      <Button title="Exibir" onPress={buscaDev} />
      <Text>Nome: {nome}</Text>
      <Text>Repositórios: {repositorio}</Text>
      <Text>Criado em: {dataCriacao}</Text>
      <Text>Seguidores: {seguidores}</Text>
      <Text>Seguindo: {seguindo}</Text>
    </View>
  );
}
