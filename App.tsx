/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeGame } from './src/pages/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStackParamList, StackParamListDataClient } from './src/Globals/types';
import { AppProvider } from './src/state/GlobalStateContext/AppContext';
import { Graphs } from './src/pages/Graphs';
import { ClientsList } from './src/pages/ClientsList';
import { ClientsDetail } from './src/pages/ClienteDetail';

const Stack = createNativeStackNavigator<StackParamListDataClient>();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AppProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
              },
              headerTintColor: isDarkMode ? '#fff' : '#000',
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeGame}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="ClientesList"
              component={ClientsList}
              options={{ title: 'Personagens' }}
            />

               <Stack.Screen
              name="ClienteDetail"
              component={ClientsDetail}
              options={{ title: 'Seu Personagem' }}
            />

                 <Stack.Screen
              name="Graphs"
              component={Graphs}
              options={{ title: 'Gráficos' }}
            />


          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppProvider>
  );
}

export default App;
