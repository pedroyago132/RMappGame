import React from 'react';
import {
  Container,
  BackgroundImage,
  TitleContainer,
  GameTitle,
  Subtitle,
  OptionsContainer,
  OptionCard,
  OptionIcon,
  OptionTextContainer,
  OptionTitle,
  OptionDescription,
  LockIcon
} from './styles';
import {
  useNavigation,
} from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Globals/types';



type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeGame = ({navigation} : Props) => {
  
  const options = [
    {
      id: 1,
      title: 'Ver Personagens',
      description: 'Explore todos os personagens do jogo',
      enabled: true,
  
    },
    {
      id: 2,
      title: 'Modo História',
      description: 'Em breve - Em desenvolvimento',
      enabled: false,

    },
    {
      id: 3,
      title: 'Multiplayer',
      description: 'Em breve - Conecte-se com amigos',
      enabled: false,

    },
    {
      id: 4,
      title: 'Opções',
      description: 'Ajuste as configurações do jogo',
      enabled: true,

    }
  ];

  console.log('navigation:::::::::',navigation)

  return (
    <Container>
      
        <TitleContainer>
          <GameTitle>Rick and Morty</GameTitle>
          <Subtitle>RMAP GAME</Subtitle>
        </TitleContainer>

        <OptionsContainer>
          {options.map((option) => (
            <OptionCard 
              key={option.id} 
              enabled={option.enabled}
              activeOpacity={0.7}
              disabled={!option.enabled}
              onPress={() => option.id == 1 ? navigation.navigate("charactersList") : null}
            >
              <OptionIcon enabled={option.enabled}>
          
              </OptionIcon>
              
              <OptionTextContainer>
                <OptionTitle enabled={option.enabled}>{option.title}</OptionTitle>
                <OptionDescription>{option.description}</OptionDescription>
              </OptionTextContainer>
              
              {!option.enabled && (
                <LockIcon>
          
                </LockIcon>
              )}
            </OptionCard>
          ))}
        </OptionsContainer>
      
    </Container>
  );
};

