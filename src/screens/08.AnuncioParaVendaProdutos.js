import React, { useState } from 'react';
import { Image, Text, ScrollView, View } from 'react-native';

export function AnuncioParaVendaProdutosScreen() {
  return (
    <View>
      <Text>RSA Produtos Mineiros</Text>
      <ScrollView horizontal={true} showHorizontalScrollIndicator={true}>
        <Image style={{width: 500, height: 500}} source={ require('../imagens/doces.png') } />
        <Image style={{width: 500, height: 500}} source={ require('../imagens/queijofrecal.png') } />
        <Image style={{width: 500, height: 500}} source={ require('../imagens/queijogouda.png') } />
        <Image style={{width: 500, height: 500}} source={ require('../imagens/queijomix.png') } />
      </ScrollView>
    </View>
  );
}
