import React from 'react'
import { FlatList, ActivityIndicator, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { useAppContext } from '../../state/GlobalStateContext/AppContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, StackParamListDataClient } from '../../Globals/types';
import { StyledButton, ButtonText, ClienteCard, ClienteImage, TextContainer, Nome, Email, VendasCount } from './styles';
import { Character, Cliente } from '../../Globals/interfaces';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  species: {
    color: '#666',
  },
  footer: {
    padding: 20,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
});

type Props = NativeStackScreenProps<StackParamListDataClient, 'ClientesList'>;

export const CharacterList = ({navigation} : Props) => {
  const { state, fetchCharacters } = useAppContext();

  React.useEffect(() => {
    fetchCharacters().catch(console.error);
  }, [state.nextPage]);

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

  const renderFooter = () => {
    if (!state.loading) return null;

    return (
      <View style={styles.footer}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  };

  // Componente de lista vazia
  const renderEmpty = () => (
    <View style={styles.empty}>
      <Text>Nenhum personagem encontrado</Text>
    </View>
  );

  return (
    <View>
      {state.loading && <p>Carregando...</p>}
      {state.error && <p>Erro: {state.error}</p>}


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
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={styles.container}
      />

    </View>
  );



};