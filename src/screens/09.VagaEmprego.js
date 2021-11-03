import React from 'react';
import { Image, Text, ScrollView, View } from 'react-native';

function VagaEmprego(props) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={{ fontWeight: 'bold' }}>{props.nome}</Text>
      <Text>Salário: {props.salario}</Text>
      <Text>Beneficios: {props.beneficio}</Text>
      <Text>Descrição: {props.descricao}</Text>
      <Text>Contato: {props.contato}</Text>
    </View>
  );
}

export function VagaEmpregoScreen() {
  return (
    <View>
      <ScrollView vertical={true} showsVerticalScrollIndicator={true}>
        <VagaEmprego
          nome='Desenvolvedor Backend mobile'
          salario={2500}
          beneficio='VR, VA, Vale Condução, Plano Odontológico'
          descricao='Desenvolver backend com foco em hotelaria, necessário conhecimento ReactJS, Python'
          contato='13 999999990 - ramal 013'
        />

        <VagaEmprego
          nome='Estágio de programação'
          salario='não informado'
          beneficio='VR, VA, VT, Plano de saúde'
          descricao='Iniciar estágio para área de programação, será disponibilizado todo material necessário para trabalho
            assim como equipamentos se necessário, necessário apenas ensino médio completo.'
          contato='13 999999991 - ramal 130'
        />

        <VagaEmprego
          nome='Pesquisador na área de Física nuclear'
          salario='a definir'
          beneficio='Plano odontológico, Bonificação anual de acordo com desempenho'
          descricao='Vagas para realizar pesquisar no campo de física nuclear, necessário formação em física e
            pós graduação em física nuclear em Hill Valley - Califórnia'
          contato='5-4385'
        />

        <VagaEmprego
          nome='Programador Frontend'
          salario={2800}
          beneficio='VR, VA ,VT, Plano de saúde'
          descricao='Vaga para programdor frontend com experiencia em HTML, CSS, JavaScript, Full Stack'
          contato='13 999999992'
        />
      </ScrollView>
    </View>
  );
}
