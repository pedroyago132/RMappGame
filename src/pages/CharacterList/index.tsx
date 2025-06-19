import React from 'react'
import { View } from 'react-native';

import { useAppContext } from '../../state/GlobalStateContext/AppContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Globals/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const CharacterList = () => {
  const { state, fetchCharacters } = useAppContext();

  React.useEffect(() => {
    fetchCharacters().catch(console.error);
  }, [fetchCharacters]);

  return (
    <View>
      {state.loading && <p>Carregando...</p>}
      {state.error && <p>Erro: {state.error}</p>}
    
    </View>
  );
};