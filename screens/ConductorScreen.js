import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConductorScreen = () => {
  const navigation = useNavigation();

  const handleMisRutas = () => {
    navigation.navigate('MisRutas');
  };

  // Lógica para registrar ruta y detalles del conductor
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Registro de ruta para conductor</Text>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Nombre</Text>
          <TextInput style={styles.formInput} />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Hora</Text>
          <TextInput style={styles.formInput} />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Asientos Disponibles</Text>
          <TextInput style={styles.formInput} />
        </View>
        {/* Agregar más campos de formulario según sea necesario */}
        <TouchableOpacity style={styles.formButton} onPress={handleMisRutas}>
          <Text style={styles.buttonText}>Registrar Ruta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConductorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 32,
    borderRadius: 8,
    maxWidth: 400,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 16,
    width: '100%',
  },
  formLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  formInput: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontSize: 14,
  },
  formButton: {
    marginTop: 24,
    padding: 12,
    backgroundColor: '#FCD34D',
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 4,
    width: '100%',
    maxWidth: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
