
import React from 'react'
import { FlatList, ActivityIndicator, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { BarChart } from "react-native-gifted-charts";
import { useAppContext } from '../../state/GlobalStateContext/AppContext';
import { ClientesAnalyticsProps, RootStackParamList, StackParamListDataClient, StackParamListDataClientPropsDetail } from '../../Globals/types';
import { Cliente } from '../../Globals/interfaces';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Typography } from '@mui/material';
import { ContainerView, StyledTypography } from './styles';
import { ClienteComMaisNumeroDeVenda } from '../../Components/CardClient';


export type PropsCardComponent = NativeStackScreenProps<StackParamListDataClientPropsDetail, 'Graphs'>;

export const Graphs = ({ navigation }: PropsCardComponent) => {
  const { state, fetchCharacters, getNomeClienteComMaisVendas, getNomeClienteComMaiorFrequencia } = useAppContext();

  function obterProximos10Dias() {
    const datas = [];
    const hoje = new Date();

    for (let i = 0; i < 10; i++) {
      const data = new Date(hoje);
      data.setDate(hoje.getDate() + i);

      const dia = String(data.getDate()).padStart(2, '0');
      const mes = String(data.getMonth() + 1).padStart(2, '0');
      const ano = data.getFullYear();

      datas.push(`${ano}-${mes}-${dia}`);
    }

    return datas;
  }


  const calcularMediaVendas = () => {
    if (!state?.clients?.data?.clientes) return 0;

    const clientes = state.clients.data.clientes;
    let totalValor = 0;
    let totalVendas = 0;

    clientes.forEach(cliente => {
      cliente.estatisticas.vendas.forEach(venda => {
        totalValor += venda.valor;
        totalVendas++;
      });
    });

    return totalVendas > 0 ? (totalValor / totalVendas).toFixed(2) : 0;
  };


  // Uso das funções
  const nomeClienteMaisVenda = getNomeClienteComMaisVendas();
  const mediaVendas = calcularMediaVendas();
  const nomeClienteMaiorFrequencia = getNomeClienteComMaiorFrequencia();


  const proximos10Dias = obterProximos10Dias();
  console.log(proximos10Dias);

  // Encontra o cliente com mais vendas (objeto único)
  const clienteMaisVenda = state.clients.data.clientes.reduce((prev, current) =>
    prev.estatisticas.vendas.length > current.estatisticas.vendas.length ? prev : current
  );


const dataCalculate = clienteMaisVenda.estatisticas.vendas.map(venda => ({
  value: venda.valor // Assumindo que cada venda tem um campo 'valor'
}));

const data = dataCalculate.length > 0 ? dataCalculate : [{ value: 0 }];

  return (
    <ContainerView>
      {state.loading && <p>Carregando...</p>}
      {state.error && <p>Erro: {state.error}</p>}



      <StyledTypography>
        Cliente com o Maior Número de vendas
      </StyledTypography>

      <ClienteComMaisNumeroDeVenda navigation={navigation} clienteMaisVenda={clienteMaisVenda} />
      {

      }


      <BarChart data={data} />

    </ContainerView>
  );



};