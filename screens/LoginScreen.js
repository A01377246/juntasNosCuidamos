import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Lógica de inicio de sesión
    // Aquí puedes agregar tu propia lógica de inicio de sesión
    // y redireccionar después de iniciar sesión exitosamente
    navigation.navigate('SeleccionScreen'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Iniciar Sesión</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Usuario</Text>
        <TextInput style={styles.input} placeholder="Usuario" />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Contraseña</Text>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Contraseña" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: '#000',
  },
  inputGroup: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
  },
  input: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    fontSize: 14,
  },
  buttonContainer: {
    width: '11%',
  },
  button: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#ffc107',
    color: '#000',
    borderRadius: 4,
    fontSize: 16,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
  },
});
