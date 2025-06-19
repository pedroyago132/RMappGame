import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

// Botão estilizado
export const StyledButton = styled(TouchableOpacity)`
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