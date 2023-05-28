import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePasajeroScreen from './screens/HomePasajeroScreen';
import HomeConductorScreen from './screens/HomeConductorScreen';
import MapScreen from './screens/MapScreen';
import LoginScreen from './screens/LoginScreen';
import SeleccionScreen from './screens/SeleccionScreen';
import ConductorScreen from './screens/ConductorScreen';
import ContactoScreen from './screens/ContactoScreen';
import ViajesScreen from './screens/ViajesScreen';
import RutaDetailScreen from './screens/RutaDetallesScreen'; 
import PasajerosScreen from './screens/PasajerosScreen';
import ReporteViajesScreen from './screens/ReporteScreen';


export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <View style={styles.container}>
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="HomeConductorScreen"
                component={HomeConductorScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="HomePasajeroScreen"
                component={HomePasajeroScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="SeleccionScreen"
                component={SeleccionScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ConductorScreen"
                component={ConductorScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ContactoScreen"
                component={ContactoScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ViajesScreen"
                component={ViajesScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="RutaDetailScreen"
                component={RutaDetailScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="PasajerosScreen"
                component={PasajerosScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ReporteScreen"
                component={ReporteViajesScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </View>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

