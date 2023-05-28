import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ViajesScreen = () => {
  const [rutas, setRutas] = useState([
    {
      id: 1,
      from: 'Ciudad de México',
      to: 'Toluca',
      date: '2023-05-01',
      time: '10:00',
      car: 'Toyota Corolla',
      seats: 4,
    },
    {
      id: 2,
      from: 'Guadalajara',
      to: 'Acapulco',
      date: '2023-05-03',
      time: '12:00',
      car: 'Ford Escape',
      seats: 3,
    },
  ]);

  const handleEliminarClick = (id) => {
    const nuevasRutas = rutas.filter((ruta) => ruta.id !== id);
    setRutas(nuevasRutas);
  };

  const handleSuspenderClick = (id) => {
    const nuevasRutas = rutas.map((ruta) => {
      if (ruta.id === id) {
        ruta.suspendida = true;
      }
      return ruta;
    });
    setRutas(nuevasRutas);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Rutas</Text>
      <View style={styles.rutasContainer}>
        {rutas.map((ruta) => (
          <View key={ruta.id} style={styles.rutaContainer}>
            <Text>
              <Text style={styles.label}>Origen:</Text> {ruta.from}
            </Text>
            <Text>
              <Text style={styles.label}>Destino:</Text> {ruta.to}
            </Text>
            <Text>
              <Text style={styles.label}>Fecha:</Text> {ruta.date}
            </Text>
            <Text>
              <Text style={styles.label}>Hora:</Text> {ruta.time}
            </Text>
            <Text>
              <Text style={styles.label}>Auto:</Text> {ruta.car}
            </Text>
            <Text>
              <Text style={styles.label}>Lugares disponibles:</Text> {ruta.seats}
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonEliminar} onPress={() => handleEliminarClick(ruta.id)}>
                <Text style={styles.buttonText}>Eliminar</Text>
              </TouchableOpacity>
              {!ruta.suspendida && (
                <TouchableOpacity style={styles.buttonSuspender} onPress={() => handleSuspenderClick(ruta.id)}>
                  <Text style={styles.buttonText}>Suspender</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ViajesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rutasContainer: {
    marginTop: 32,
    width: '100%',
    maxWidth: 600,
  },
  rutaContainer: {
    marginBottom: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  label: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  buttonEliminar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    padding: 16,
    borderWidth: 1,
    backgroundColor: '#FCD34D',
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
    maxWidth: 100,
  },
  buttonSuspender: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    padding: 16,
    borderWidth: 1,
    backgroundColor: '#FCD34D',
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
    maxWidth: 100,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
