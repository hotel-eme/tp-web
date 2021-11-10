import React, { useState } from 'react';
import { Image, Text, ScrollView, View } from 'react-native';

export function AnuncioParaVendaProdutosScreen() {
  return (
    <View>
      <Text>RSA Produtos Mineiros</Text>
      <ScrollView horizontal={true} showHorizontalScrollIndicator={true}>
        <Image style={{width: 500, height: 500}} source={ require('../assets/images/doces.png') } />
        <Image style={{width: 500, height: 500}} source={ require('../assets/images/queijofrecal.png') } />
        <Image style={{width: 500, height: 500}} source={ require('../assets/images/queijogouda.png') } />
        <Image style={{width: 500, height: 500}} source={ require('../assets/images/queijomix.png') } />
      </ScrollView>
    </View>
  );
}
