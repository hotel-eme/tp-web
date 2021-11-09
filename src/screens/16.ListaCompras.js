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
  /**
   * Componente para exibir cada tarefa
   */
  function removeListaCompras() {
    // Remove tarefa e executa callback em seguida
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
  /**
   * Componente responsável pela criação de tarefas
   */
  const campoNovaListaCompras = useRef();
  const [novaListaCompras, setNovaListaCompras] = useState(null);

  function listaComprasValida() {
    /**
     * Valida tarefa preenchida
     */
    if (!novaListaCompras) return false;  // Se nulo
    if (!novaListaCompras.trim().length) return false;  // Se vazio, mesmo com espaços
    return true;
  }

  function adicionaListaCompras() {
    if (!listaComprasValida()) {
      return;  // Aborta função se tarefa não é válida
    }

    // Cria nova tarefa e executa callback em seguida
    api.post('/', { descricao: novaListaCompras }).then(props.aoAdicionar);

    // Limpa memória
    campoNovaListaCompras.current.clear();  // Esvazia campo de texto
    setNovaListaCompras(null);  // Esvazia tarefa digita anteriormente
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
        disabled={!listaComprasValida()}  // Desativa botão quando o campo está vazio
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
