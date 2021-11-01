import React, { useState } from 'react';
import { Button, Text, TextInput, View, Image } from 'react-native';

export function CalculoIMCScreen() {
  var [peso, setPeso] = useState(null);
  var [altura, setAltura] = useState(null);
  var [resultado, setResultado] = useState(0);
  var [classificacao, setClassificacao] = useState(null);

  function verifica() {
    var imc = peso / (altura * altura)
    setResultado(imc);
    if (imc < 18.5){
      setClassificacao ("Abaixo do Peso")
    }else if ((imc > 18.6) && (imc < 24.9)){
      setClassificacao ("Peso Normal")
    }else if ((imc > 25) && (imc < 29.9)){
      setClassificacao ("Sobrepeso")
    }else if ((imc > 30) && (imc < 34.9)){
      setClassificacao ("Obesidade Grau I")
    }else if ((imc > 35) && (imc < 39.9)){
      setClassificacao ("Obesidade Grau II")
    }else if (imc >= 40){
      setClassificacao ("Obesidade Grau III ou Móbida")
    }else {
      setClassificacao ("Verifique os valores digitados")
    }
  }
  return (
    <View>
      <Image style={{width: 200, height: 200}} source={ require('../imagens/IMC.png')} />
      <TextInput placeholder="Digite sua altura, em m:" onChangeText={setAltura} />
      <TextInput placeholder="Digite o seu peso, em kg:" onChangeText={setPeso} />
      <Button title="Verificar" onPress={verifica} />
      <Text>IMC: {resultado.toFixed(2)}</Text>
      <Text>Classificação: {classificacao}</Text>
    </View>
  );
}
