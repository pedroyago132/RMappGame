// styles.ts
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Header = styled.View`
  position: absolute;
  top: 40px;
  left: 20px;
  z-index: 10;
`;

export const BackButton = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.2);
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const ProfileContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border-width: 4px;
  border-color: white;
  margin-top: 100px;
  z-index: 2;
`;

export const NameContainer = styled.View`
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const Name = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const StatusIndicator = styled.View<{ status: string }>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ status }) => 
    status === 'alive' ? '#55cc44' : 
    status === 'dead' ? '#d63d2e' : '#9e9e9e'};
  margin-right: 8px;
`;

export const StatusText = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const DetailsContainer = styled.View`
  width: 90%;
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

export const DetailItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const DetailText = styled.Text`
  font-size: 16px;
  color: #333;
  margin-left: 10px;
`;

export const EpisodesTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 30px 0 15px;
  width: 90%;
`;

export const EpisodesContainer = styled.View`
  width: 90%;
`;

export const EpisodeCard = styled.View`
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EpisodeNumber = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const EpisodeLink = styled.Text`
  font-size: 14px;
  color: #1E3264;
`;