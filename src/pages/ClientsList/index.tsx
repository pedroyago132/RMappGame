import React from 'react'
import { FlatList, ActivityIndicator, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { useAppContext } from '../../state/GlobalStateContext/AppContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, StackParamListDataClient } from '../../Globals/types';
import { StyledButton, ButtonText, ClienteCard, ClienteImage, TextContainer, Nome, Email, VendasCount } from './styles';
import { ApiResponseClient, Character, Cliente } from '../../Globals/interfaces';


type Props = NativeStackScreenProps<StackParamListDataClient, 'ClientesList'>;

export const CharacterList = ({navigation} : Props) => {
  const { state, fetchCharacters } = useAppContext();

  React.useEffect(() => {
  
  }, [state.nextPage,console.log(state.clients.data.clientes)]);

 const renderItem = ({ item }: { item: Cliente }) => (
    <ClienteCard onPress={() => navigation.navigate('ClienteDetail', { cliente: item })}>
   
      <TextContainer>
        <Nome>{item.info.nomeCompleto}</Nome>
        <Email>{item.info.detalhes.email}</Email>
        <VendasCount>
          {item.estatisticas.vendas[0].valor} vendas
        </VendasCount>
      </TextContainer>
    </ClienteCard>
  );


  return (
    <View>


      <FlatList
        data={state.clients.data.clientes}
        renderItem={renderItem}
        keyExtractor={(item) => item.info.nomeCompleto}
        onEndReached={() => {
          if (state.nextPage) {
            fetchCharacters();
          }
        }}
        onEndReachedThreshold={0.5}
      />

    </View>
  );



};