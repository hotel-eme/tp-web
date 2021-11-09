import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const api = axios.create({
  baseURL: 'http://localhost:19800/api/lista_compras/',
  headers: { 'Accept': 'application/json' },
});

export function ListaComprasScreen() {

  const [listaCompras, setListaCompras] = useState(null);

  function buscaListaCompras() {
    api.get('/').then(function (resposta) {
      setListaCompras(resposta.data);
    });
  }


  !listaCompras && buscaListaCompras();

  return (
    <View>
      <NovaListaCompras aoAdicionar={buscaListaCompras} />
      <View>
        {listaCompras && listaCompras.map(function (listaCompras) {
          return (
            <ListaCompras key={listaCompras.id} aoRemover={buscaListaCompras} {...listaCompras} />
          );
        })}
        {listaCompras && (listaCompras.length
          ? <Text style={estilos.lista.resumo}>{listaCompras.length} Lista.</Text>
          : <Text style={estilos.lista.resumo}>Nenhuma compra adicionada!</Text>
        )}
      </View>
    </View>
  );
}

function ListaCompras(props) {
  function removeListaCompras() {
    api.delete(`/${props.id}/`).then(props.aoRemover);
  }

  return (
    <View style={estilos.listaCompras.container}>
      <Text style={estilos.listaCompras.texto}>{props.descricao}</Text>
      <Button title="🗑" color="#d65453" onPress={removeListaCompras} />
    </View>
  );
}

function NovaListaCompras(props) {
  const campoNovaListaCompras = useRef();
  const [novaListaCompras, setNovaListaCompras] = useState(null);

  function listaComprasValida() {
    if (!novaListaCompras) return false;
    if (!novaListaCompras.trim().length) return false;
    return true;
  }

  function adicionaListaCompras() {
    if (!listaComprasValida()) {
      return;
    }
    api.post('/', { descricao: novaListaCompras }).then(props.aoAdicionar);
    campoNovaListaCompras.current.clear();
    setNovaListaCompras(null);
  }

  return (
    <View style={estilos.novaListaCompras.container}>
      <TextInput
        ref={campoNovaListaCompras}
        style={estilos.novaListaCompras.campo}
        placeholder="O que Comprar..."
        onChangeText={setNovaListaCompras}
      />
      <Button
        color="green"
        title="Adicionar"
        onPress={adicionaListaCompras}
        disabled={!listaComprasValida()}
      />
    </View>
  );
}

const estilos = {
  lista: StyleSheet.create({
    resumo: {
      margin: 10,
    },
  }),
  novaListaCompras: StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      margin: 10,
    },
    campo: {
      borderBottomColor: '#aaa',
      borderBottomWidth: 2,
      flexGrow: 1,
    },
  }),
  listaCompras: StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: 'white',
      flex: 1,
      flexDirection: 'row',
      marginHorizontal: 10,
      marginVertical: 5,
    },
    texto: {
      flexGrow: 1,
      marginHorizontal: 10,
    },
  }),
};
