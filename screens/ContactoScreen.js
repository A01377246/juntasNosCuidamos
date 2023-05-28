import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeConductorScreen from './HomeConductorScreen';

const ContactoScreen = () => {
  const navigation = useNavigation();

  const handleBackClick = () => {
    navigation.navigate(HomeConductorScreen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacto</Text>
      <View style={styles.contactInfo}>
        <Text>
          <Text style={styles.infoLabel}>Teléfono:</Text> 55-1234-5678
        </Text>
        <Text>
          <Text style={styles.infoLabel}>Correo electrónico:</Text> contacto@miempresa.com
        </Text>
        <Text>
          <Text style={styles.infoLabel}>Dirección:</Text> Av. Reforma 123, Ciudad de México
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleBackClick}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271220.png' }}
          style={styles.image}
        />
        <Text style={styles.buttonText}>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contactInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 32,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#FCD34D',
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
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
