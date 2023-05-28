import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ReporteViajesScreen = () => {
  const [motivo, setMotivo] = useState('');
  const [comentarios, setComentarios] = useState('');

  const handleSubmit = () => {
    // Aquí puedes implementar la lógica para enviar el reporte de viajes
    // a través de una API o cualquier otra acción requerida.
    // Por simplicidad, este ejemplo solo muestra los datos en la consola.
    console.log('Motivo:', motivo);
    console.log('Comentarios:', comentarios);
    // Puedes agregar más lógica según tus necesidades
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reportar Viajes</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Motivo del reporte:</Text>
        <TextInput
          style={styles.input}
          value={motivo}
          onChangeText={setMotivo}
          placeholder="Ingrese el motivo del reporte"
        />
        <Text style={styles.label}>Comentarios adicionales:</Text>
        <TextInput
          style={styles.input}
          value={comentarios}
          onChangeText={setComentarios}
          placeholder="Ingrese comentarios adicionales"
          multiline
        />
         <Text style={styles.label}>Fecha del viaje:</Text>
        <TextInput
          style={styles.input}
          value={comentarios}
          onChangeText={setComentarios}
          placeholder="Ingrese la Fecha del viaje"
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar Reporte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FCD34D',
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ReporteViajesScreen;
