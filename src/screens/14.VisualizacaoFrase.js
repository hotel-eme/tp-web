import React, { useState } from "react";
import { Switch, Text, View } from "react-native";


export function VisualizacaoFraseScreen() {
  var [modoNoturno, setModoNoturno] = useState(false);
  var [fonteGrande, setFonteGrande] = useState(false);

  const style = {
    backgroundColor: modoNoturno ? "black" : "white",
    color: modoNoturno ? "white" : "black",
    fontSize: fonteGrande ? 25 : 15,
  }

  return (
    <View>
      <View >
        <Text>Modo Noturno</Text>
        <Switch value={modoNoturno} onValueChange={setModoNoturno} />
        <Text>Tamanho da Fonte</Text>
        <Switch value={fonteGrande} onValueChange={setFonteGrande} />
      </View>
      <View>
        <Text style={style}>
          "O amor pertence a outro reino. <br />Não podemos fabricar a pedido. <br />Nem o podemos subjugar
          quando aparece. <br />O amor não é uma escolha nossa" - Dan Brown
        </Text>
      </View>
    </View>
  );
}

