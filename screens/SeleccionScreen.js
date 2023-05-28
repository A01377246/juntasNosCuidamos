import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SeleccionScreen = () => {
  const navigation = useNavigation();

  const handleDriverSelection = () => {
    navigation.navigate('HomeConductorScreen'); // Redirige a la página de conductor
  };

  const handlePassengerSelection = () => {
    navigation.navigate('HomePasajeroScreen'); // Redirige a la página de pasajero
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDriverSelection}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3190/3190249.png' }}
            style={styles.image}
          />
          <Text style={styles.buttonText}>Soy conductor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePassengerSelection}>
          <Image
            source={{ uri: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png' }}
            style={styles.image}
          />
          <Text style={styles.buttonText}>Soy pasajero</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SeleccionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#FCD34D',
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 4,
    width: '100%',
    maxWidth: 250,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    marginRight: 8,
    width: 30,
    height: 30,
  },
});
