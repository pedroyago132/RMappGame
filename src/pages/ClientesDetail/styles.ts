import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 20px;
  background-color: white;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-right: 20px;
`;

export const HeaderText = styled.View``;

export const Nome = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #333;
`;

export const Email = styled.Text`
  font-size: 16px;
  color: #666;
  margin-top: 5px;
`;

export const WarningBanner = styled.View`
  background-color: #fff3e0;
  padding: 10px 20px;
`;

export const WarningText = styled.Text`
  color: #e65100;
  font-weight: 500;
`;

export const Section = styled.View`
  background-color: white;
  margin: 10px 0;
  padding: 15px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const InfoItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const InfoLabel = styled.Text`
  font-weight: 500;
  color: #666;
`;

export const InfoText = styled.Text`
  color: #333;
`;

export const VendaItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const VendaData = styled.Text`
  color: #666;
`;

export const VendaValor = styled.Text`
  font-weight: bold;
  color: #2e7d32;
`;
