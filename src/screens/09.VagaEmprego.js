import React from 'react';
import { Image, Text, ScrollView, View } from 'react-native';


export function VagaEmpregoScreen() {
  return (
    <View>
      <ScrollView vertical={true} showsVerticalScrollIndicator={true}>
        <Text>Desenvolvedor Backend mobile</Text>
        <Text>Salário: R$2.500</Text>
        <Text>Beneficios: Vale Alimentação, Vale Condução, Plano Odontológico.</Text>
        <Text>Descrição: Desenvolver backend com foco em hotelaria, necessário conhecimento ReactJS, Python.</Text>
        <Text>Contato: 13 999999990 - Ramal 013</Text>
        {'\n'}
        <Text>Estágio de programação</Text>
        <Text>Salário: não informado</Text>
        <Text>Beneficios: Vale Alimentação, Vale Transporte, Plano de saúde, Auxilio HomeOffice</Text>
        <Text>Descrição: Iniciar estágio para área de programação, será disponibilizado todo material necessário para trabalho
        assim como equipamentos se necessário, necessário apenas ensino médio completo.</Text>
        <Text>Contato: 13 999999991 - Ramal 130</Text>
        {'\n'}
        <Text>Pesquisador na área de Física nuclear</Text>
        <Text>Salário: a definir</Text>
        <Text>Beneficios: Plano odontológico, Bonificação anual de acordo com desempenho</Text>
        <Text>Descrição: Vagas para realizar pesquisar no campo de física nuclear, necessário formação em física e pós graduação em física nuclear</Text>
        <Text>Observação: Em caso de contratação, o funcionário deverá se mudar para Hill Valley - Califórnia, uma instalação completa para pesquisas completo
        laboratórios, centro hospitalar, refeitório para todos os funcionários.</Text>
        <Text>Contato: 5-4385</Text>
        {'\n'}
        <Text>Programador Frontend</Text>
        <Text>Salário: a definir</Text>
        <Text>Beneficios: Vale Alimentação, Vale Transporte, Plano de saúde, Plano odontológico</Text>
        <Text>Descrição: Vaga para programdor frontend com experiencia em HTML, CSS, JavaScript, Full Stack</Text>
        <Text>Contato: 13 999999992</Text>
      </ScrollView>
    </View>
  );
}
