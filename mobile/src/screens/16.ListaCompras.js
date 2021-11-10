import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const api = axios.create({
  baseURL: 'http://localhost:19800/api/itens-de-compra/',
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
      <NovoItem aoAdicionar={buscaListaCompras} />
      <View>
        {listaCompras && listaCompras.map(function (item) {
          return (
            <ItemCompra key={item.id} aoRemover={buscaListaCompras} {...item}/>
          );
        })}
        {listaCompras && (listaCompras.length
          ? <Text style={estilos.lista.resumo}>{listaCompras.length} itens</Text>
          : <Text style={estilos.lista.resumo}>Nenhuma compra adicionada!</Text>
        )}
      </View>
    </View>
  );
}

function ItemCompra(props) {
  /**
   * Componente para exibir cada tarefa
   */
  function removeListaCompras() {
    // Remove tarefa e executa callback em seguida
    api.delete(`/${props.id}/`).then(props.aoRemover);
  }

  return (
    <View style={estilos.compras.container}>
      <Text style={estilos.compras.texto}>{props.nome_produto}</Text>
      <Text style={estilos.compras.texto}>{props.quantidade}</Text>
      <Button title="🗑" color="#d65453" onPress={removeListaCompras} />
    </View>
  );
}

function NovoItem(props) {
  /**
   * Componente responsável pela criação de tarefas
   */
  const campoNomeProduto= useRef();
  const campoQuantidade= useRef();
  const [nomeProduto, setNomeProduto] = useState(null);
  const [quantidade, setQuantidade] = useState(null);

  function itemValido() {
    /**
     * Valida tarefa preenchida
     */
    if (!nomeProduto) return false;  // Se nulo
    if (!nomeProduto.trim().length) return false;  // Se vazio, mesmo com espaços
    if (!quantidade) return false;
    if (!quantidade.trim().length) return false;
    return true;
  }

  function adicionaItem() {
    if (!itemValido()) {
      return;  // Aborta função se tarefa não é válida
    }

    // Cria nova tarefa e executa callback em seguida
    api.post('/', {
      nome_produto: nomeProduto,
      quantidade: quantidade,
    }).then(props.aoAdicionar);

    // Limpa memória
    campoNomeProduto.current.clear();  // Esvazia campo de texto
    setNomeProduto(null);  // Esvazia tarefa digita anteriormente
    campoQuantidade.current.clear();  // Esvazia campo de texto
    setQuantidade(null);
  }

  return (
    <View style={estilos.item.container}>
      <TextInput
        ref={campoNomeProduto}
        style={[estilos.item.campo, {width:120}]}
        placeholder="Nome do produto"
        onChangeText={setNomeProduto}
      />
      <TextInput
        ref={campoQuantidade}
        style={[estilos.item.campo, {width:50}]}
        placeholder="Quantidade"
        onChangeText={setQuantidade}
      />
      <Button
        color="green"
        title="Adicionar"
        onPress={adicionaItem}
        disabled={!itemValido()}  // Desativa botão quando o campo está vazio
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
  item: StyleSheet.create({
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
  compras: StyleSheet.create({
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
