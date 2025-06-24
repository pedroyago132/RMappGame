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
import { RootStackParamList, StackParamListDataClient, StackParamListDataClientDetail } from '../../Globals/types';



type Props = NativeStackScreenProps<StackParamListDataClientDetail, 'Home'>;

export const HomeGame = ({navigation} : Props) => {
  
  const options = [
    {
      id: 1,
      title: 'Clientes',
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
      title: 'Graphs',
      description: 'Ajuste as configurações do jogo',
      enabled: true,

    }
  ];

  const hd = (option:any) => {
    switch(option.id){
      case 1:
        return navigation.navigate('ClienteDetail',{item:option})
    }
  }


  return (
    <Container>
      
        <TitleContainer>
          <Subtitle>CRM</Subtitle>
        </TitleContainer>

        <OptionsContainer>
          {options.map((option) => (
            <OptionCard 
              key={option.id} 
              enabled={option.enabled}
              activeOpacity={0.7}
              disabled={!option.enabled}
              onPress={() =>hd(option)}
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

