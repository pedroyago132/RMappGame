import { Typography } from '@mui/material';
import { Text, View } from 'react-native';

import styled from 'styled-components';

export const StyledTypography = styled(Text)`
  font-weight: bold;
  color: #000000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-size:17px;
`;

export const ContainerView = styled(View)`
  flex: 1;

  align-items: center;
  background-color:'#f5f5f5';
  padding: 16px;
`;
