
import React from 'react'
import { FlatList, ActivityIndicator, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { BarChart} from "react-native-gifted-charts";
import { useAppContext } from '../../state/GlobalStateContext/AppContext';
import { ClientesAnalyticsProps, RootStackParamList, StackParamListDataClient } from '../../Globals/types';
import { Cliente } from '../../Globals/interfaces';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Height } from '@mui/icons-material';
import { ClienteCard, Nome, TextContainer, VendasCount } from '../CharacterList/styles';
import { Email } from '../ClientesDetail/styles';
 

type Props = NativeStackScreenProps<StackParamListDataClient, 'Graphs'>;

export const Graphs = ({navigation} : Props) => {
  const { state, fetchCharacters,getNomeClienteComMaisVendas,getNomeClienteComMaiorFrequencia } = useAppContext();

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



const ClienteComMaisNumeroDeVenda = () => {
  // Encontra o cliente com mais vendas (objeto único)
  const clienteMaisVenda = state.clients.data.clientes.reduce((prev, current) => 
    prev.estatisticas.vendas.length > current.estatisticas.vendas.length ? prev : current
  );

  return (
    <ClienteCard 
      onPress={() => navigation.navigate('ClienteDetail', { cliente: clienteMaisVenda })}
    >
      <TextContainer>
        <Nome>{clienteMaisVenda.info.nomeCompleto}</Nome>
        <Email>{clienteMaisVenda.info.detalhes.email}</Email>
        <VendasCount>
          {clienteMaisVenda.estatisticas.vendas.length} vendas
        </VendasCount>
      </TextContainer>
    </ClienteCard>
  );
};

  const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]

  return (
    <View>
      {state.loading && <p>Carregando...</p>}
      {state.error && <p>Erro: {state.error}</p>}

       <Text>Cliente com Maior Número de vendas</Text>
       <ClienteComMaisNumeroDeVenda />
       {
        
       }
      

<BarChart data= {data} />

    </View>
  );



};