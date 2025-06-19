import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

interface OptionCardProps {
  enabled?: boolean;
}

export const Container = styled(View)`
  flex: 1;
  background-color: #03053d;
  align-items:center;
  justify-content:center;
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  padding: 20px;
  justify-content: center;
`;

export const TitleContainer = styled(View)`
  margin-bottom: 40px;
  align-items: center;
`;

export const GameTitle = styled(Text)`
  font-size: 36px;
  font-weight: 800;
  color: #00ff9d;
  text-transform: uppercase;
  text-shadow: 0 0 10px rgba(0, 255, 157, 0.7);
  margin-bottom: 10px;
`;

export const Subtitle = styled(Text)`
  font-size: 16px;
  color: #8a9ba8;
  letter-spacing: 2px;
`;

export const OptionsContainer = styled(View)`
  gap: 20px;
`;

export const OptionCard = styled(TouchableOpacity)<OptionCardProps>`
  background-color: ${props => props.enabled ? 'rgba(0, 255, 157, 0.1)' : 'rgba(138, 155, 168, 0.1)'};
  border-width: 2px;
  border-color: ${props => props.enabled ? '#00ff9d' : 'rgba(138, 155, 168, 0.3)'};
  border-radius: 12px;
  padding: 20px;
  width:85%;
  flex-direction: row;
  align-items: center;
  opacity: ${props => props.enabled ? 1 : 0.6};
`;

export const OptionIcon = styled(View)<OptionCardProps>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${props => props.enabled ? '#00ff9d' : 'rgba(138, 155, 168, 0.5)'};
  margin-right: 15px;
  justify-content: center;
  align-items: center;
`;

export const OptionTextContainer = styled(View)`
  flex: 1;
`;

export const OptionTitle = styled(Text)<OptionCardProps>`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.enabled ? '#ffffff' : 'rgba(138, 155, 168, 0.8)'};
`;

export const OptionDescription = styled(Text)`
  font-size: 14px;
  color: rgba(138, 155, 168, 0.6);
  margin-top: 4px;
`;

export const LockIcon = styled(View)`
  width: 24px;
  height: 24px;
  background-color: rgba(138, 155, 168, 0.3);
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;