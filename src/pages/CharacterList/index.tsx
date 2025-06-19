import React from 'react'
import { FlatList, ActivityIndicator, StyleSheet, Text, View, Image } from 'react-native';

import { useAppContext } from '../../state/GlobalStateContext/AppContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Globals/types';
import { StyledButton, ButtonText } from './styles';
import { Character } from '../../Globals/interfaces';

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

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const CharacterList = () => {
  const { state, fetchCharacters } = useAppContext();

  React.useEffect(() => {
    fetchCharacters().catch(console.error);
  }, [state.nextPage]);

  const renderItem = ({ item }: { item: Character }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
      </View>
    </View>
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
      <StyledButton onPress={() => console.log('STATE::::', state)} >
        <ButtonText />
      </StyledButton>

      <FlatList
        data={state.characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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