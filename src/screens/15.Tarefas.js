import React, { useState } from "react"
import { Button, Text, TextInput, View } from "react-native"

function Tarefa({ descricao }) {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Text style={{flexGrow: 1}}>{descricao}</Text>
      <Button title="Apagar" />
    </View>
  );
}

export function TarefasScreen() {
  const [novaTarefa, setNovaTarefa] = useState(null);

  const tarefas = [
    "Tarefa 1",
    "Tarefa 2",
  ];

  return (
    <View>
      <View style={{flex: 1, flexDirection: 'row' }}>
        <TextInput style={{flexGrow: 1}} placeholder="O que fazer..." onChangeText={setNovaTarefa} />
        <Button title="+" />
      </View>
      <View>
        {tarefas.map(function (tarefa, i) {
          return <Tarefa key={i} descricao={tarefa} />
        })}
      </View>
    </View>
  );
}
