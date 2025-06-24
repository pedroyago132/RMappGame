import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

// Botão estilizado
export  const StyledButton = styled(TouchableOpacity)`
  background-color: #6200ee;
  padding: 12px 24px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  elevation: 2;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  opacity: ${props => props.disabled ? 0.6 : 1};
`;

export const ButtonText = styled(Text)`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Header = styled.View`
  padding: 15px;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const MetaInfo = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
`;

export const ClienteCard = styled(TouchableOpacity)`
  flex-direction: row;
  padding: 15px;
  margin: 10px 15px;
  background-color: white;
  border-radius: 8px;
  elevation: 2;
  align-items: center;
`;

export const ClienteImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 15px;
`;

export const TextContainer = styled.View`
  flex: 1;
`;

export const Nome = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;

export const Email = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 2px;
`;

export const VendasCount = styled.Text`
  font-size: 12px;
  color: #4caf50;
  margin-top: 5px;
`;

export const DuplicadoBadge = styled.Text`
  background-color: #ffeb3b;
  color: #333;
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
`;