import React from 'react';
import {
  Container,
  Header,
  BackButton,
  ProfileContainer,
  ProfileImage,
  NameContainer,
  Name,
  Status,
  StatusIndicator,
  StatusText,
  DetailsContainer,
  DetailItem,
  DetailText,
  EpisodesTitle,
  EpisodesContainer,
  EpisodeCard,
  EpisodeNumber,
  EpisodeLink
} from './styles';
import { CharacterPropsPageView, CharactersState, RootStackParamList } from '../../Globals/types';
import { Character } from '../../Globals/interfaces';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type PageViewCharacterProps = {
  route: RouteProp<CharacterPropsPageView, 'character'>;
  navigation: NativeStackScreenProps<RootStackParamList, 'characterPageView'>;
};

export const PageViewCharacter = ({ route }:PageViewCharacterProps) => {
  // Supondo que o personagem é passado por parâmetro de navegação
  const character = route.params?.character
  const episodeCount = character.episode.length;
  const createdDate = new Date(character.created).toLocaleDateString();

  return (
    <Container>
      <Header>
        <BackButton>
     
        </BackButton>
      </Header>
      
      <ProfileContainer>
      
        
        <ProfileImage source={{ uri: character.image }} />
        
        <NameContainer>
          <Name>{character.name}</Name>
          <Status>
            <StatusIndicator status={character.status.toLowerCase()} />
            <StatusText>{character.status} - {character.species}</StatusText>
          </Status>
        </NameContainer>
        
        <DetailsContainer>
          <DetailItem>
        
            <DetailText>{character.gender}</DetailText>
          </DetailItem>
          
          <DetailItem>
     
            <DetailText>Origin: {character.origin.name}</DetailText>
          </DetailItem>
          
          <DetailItem>
      
            <DetailText>Location: {character.location.name}</DetailText>
          </DetailItem>
          
          <DetailItem>

            <DetailText>Appeared in {episodeCount} episodes</DetailText>
          </DetailItem>
          
          <DetailItem>
     
            <DetailText>Created: {createdDate}</DetailText>
          </DetailItem>
        </DetailsContainer>
        
        <EpisodesTitle>EPISODES ({episodeCount})</EpisodesTitle>
        <EpisodesContainer>
          {character.episode.map((ep: string, index: number) => (
            <EpisodeCard key={`episode-${index}`}>
              <EpisodeNumber>Episode {ep.split('/').pop()}</EpisodeNumber>
              <EpisodeLink>View details</EpisodeLink>
            </EpisodeCard>
          ))}
        </EpisodesContainer>
      </ProfileContainer>
    </Container>
  );
};

