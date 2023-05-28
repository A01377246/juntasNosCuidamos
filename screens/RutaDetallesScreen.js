import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RutaDetailScreen = () => {
  const navigation = useNavigation();

  // Ejemplo de información detallada de la ruta
  const route = {
    from: 'Ciudad de México',
    to: 'Toluca',
    date: '2023-05-01',
    time: '10:00',
    car: 'Toyota Corolla',
    seats: 4,
  };

  const handleContactClick = () => {
    navigation.navigate('ContactoScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de la ruta {route.id}</Text>
      <Text>
        <Text style={styles.label}>Origen:</Text> {route.from}
      </Text>
      <Text>
        <Text style={styles.label}>Destino:</Text> {route.to}
      </Text>
      <Text>
        <Text style={styles.label}>Fecha:</Text> {route.date}
      </Text>
      <Text>
        <Text style={styles.label}>Hora:</Text> {route.time}
      </Text>
      <Text>
        <Text style={styles.label}>Auto:</Text> {route.car}
      </Text>
      <Text>
        <Text style={styles.label}>Lugares disponibles:</Text> {route.seats}
      </Text>
      <Button title="Contacto" onPress={handleContactClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default RutaDetailScreen;
