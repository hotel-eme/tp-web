import React, { useState } from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';

const classificacoes = {
  // imc: classificacao
  // https://www.tuasaude.com/imc/
  0: 'Muito abaixo do peso',
  17: 'Abaixo do peso',
  18.5: 'Peso normal',
  25: 'Acima do peso',
  30: 'Obesidade I',
  35: 'Obesidade II',
  40: 'Obesidade III',
};

export function CalculoIMCScreen() {
  var [peso, setPeso] = useState(null);
  var [altura, setAltura] = useState(null);
  var [resultado, setResultado] = useState(0);
  var [classificacao, setClassificacao] = useState(null);

  function verifica() {
    var imc = peso / (altura * altura);
    setResultado(imc);

    // Seleciona classificação verificando cada item
    const imcsOrdenadosMaiorMenor = Object.keys(classificacoes).sort().reverse();
    for (const imcReferencia of imcsOrdenadosMaiorMenor) if (imc > imcReferencia) {
      setClassificacao(classificacoes[imcReferencia]);
      break;
    }
  }

  return (
    <View>
      <Image style={{ width: 200, height: 200 }} source={require('../assets/images/IMC.png')} />
      <TextInput placeholder="Digite sua altura, em m:" onChangeText={setAltura} />
      <TextInput placeholder="Digite o seu peso, em kg:" onChangeText={setPeso} />
      <Button title="Verificar" onPress={verifica} />
      <Text>IMC: {resultado.toFixed(2)}</Text>
      <Text>Classificação: {classificacao}</Text>
    </View>
  );
}
