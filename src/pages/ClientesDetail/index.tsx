import React from 'react';
import {
  Container,
  Email,
  Header,
  HeaderText,
  InfoItem,
  InfoLabel,
  InfoText,
  Nome,
  ProfileImage,
  Section,
  SectionTitle,
  VendaData,
  VendaItem,
  VendaValor,
  WarningBanner,
  WarningText,

} from './styles';
import { CharacterPropsPageView, CharactersState, ClienteDetailProps, ClienteDetailRouteProp, RootStackParamList, StackParamListDataClient } from '../../Globals/types';
import { Character, Cliente } from '../../Globals/interfaces';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type CharacterPageRouteProp = RouteProp<StackParamListDataClient, 'ClienteDetail'>;
type CharacterPageNavigationProp = NativeStackScreenProps<StackParamListDataClient, 'ClienteDetail'>;


export const PageViewCharacter = ({ route }:ClienteDetailProps) => {
  // Supondo que o personagem é passado por parâmetro de navegação
  const cliente = route.params.cliente

  return (
     <Container>
      <Header>
    
        <HeaderText>
          <Nome>{cliente.info.nomeCompleto}</Nome>
          <Email>{cliente.info.detalhes.email}</Email>
        </HeaderText>
      </Header>

      <Section>
        <SectionTitle>Estatísticas</SectionTitle>
        <InfoItem>
          <InfoLabel>Total de Vendas:</InfoLabel>
          <InfoText>R$ {null}</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Quantidade:</InfoLabel>
          <InfoText>{cliente.estatisticas.vendas.length}</InfoText>
        </InfoItem>
      </Section>

      {cliente.estatisticas.vendas.length > 0 && (
        <Section>
          <SectionTitle>Últimas Vendas</SectionTitle>
          {cliente.estatisticas.vendas.map((venda, index) => (
            <VendaItem key={index}>
              <VendaData>{new Date(venda.data).toLocaleDateString('pt-BR')}</VendaData>
              <VendaValor>R$ {venda.valor.toFixed(2)}</VendaValor>
            </VendaItem>
          ))}
        </Section>
      )}
    </Container>
  );
};

