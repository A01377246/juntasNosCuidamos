import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PasajerosScreen = () => {
  const navigation = useNavigation();

  // Ejemplo de datos de rutas disponibles
  const routes = [
    {
      id: 1,
      title: 'Ruta 1',
      details: 'Hora: 8:00 am - Conductor: Juan Pérez',
      image: 'https://cdn-icons-png.flaticon.com/512/3190/3190249.png', // URL de la imagen
    },
    {
      id: 2,
      title: 'Ruta 2',
      details: 'Hora: 9:30 am - Conductor: Ana Gómez',
      image: 'https://cdn-icons-png.flaticon.com/512/3190/3190222.png', // URL de la imagen
    },
    {
      id: 3,
      title: 'Ruta 3',
      details: 'Hora: 10:45 am - Conductor: Pedro Martínez',
      image: 'https://cdn-icons-png.flaticon.com/512/3190/3190196.png', // URL de la imagen
    },
    {
      id: 4,
      title: 'Ruta 4',
      details: 'Hora: 12:15 pm - Conductor: Laura Ramírez',
      image: 'https://cdn-icons-png.flaticon.com/512/3190/3190260.png', // URL de la imagen
    },
    {
      id: 5,
      title: 'Ruta 5',
      details: 'Hora: 2:30 pm - Conductor: Carlos López',
      image: 'https://cdn-icons-png.flaticon.com/512/3190/3190265.png', // URL de la imagen
    },
    {
      id: 6,
      title: 'Ruta 6',
      details: 'Hora: 3:45 pm - Conductor: Marta Sánchez',
      image: 'https://cdn-icons-png.flaticon.com/512/3190/3190232.png', // URL de la imagen
    },
    {
      id: 7,
      title: 'Ruta 7',
      details: 'Hora: 4:30 pm - Conductor: Andrés Torres',
      image: 'https://cdn-icons-png.flaticon.com/512/3190/3190243.png', // URL de la imagen
    },
    {
      id: 8,
      title: 'Ruta 8',
      details: 'Hora: 5:15 pm - Conductor: Isabel Gutiérrez',
      image: 'https://cdn-icons-png.flaticon.com/512/3190/3190185.png', // URL de la imagen
    },
    {
      id: 9,
      title: 'Ruta 9',
      details: 'Hora: 6:00 pm - Conductor: Jorge Romero',
      image: 'https://cdn-icons-png.flaticon.com/512/3190/3190225.png', // URL de la imagen
    },
    {
      id: 10,
      title: 'Ruta 10',
      details: 'Hora: 7:30 pm - Conductor: María Torres',
      image: 'https://cdn-icons-png.flaticon.com/512/4471/4471599.png', // URL de la imagen
    },
  ];

  const handleRoutePress = () => {
    navigation.navigate('RutaDetailScreen'); // Redirige a la página de ruta
  };

  // Renderizar las rutas disponibles
  const renderRoutes = () => {
    return routes.map((route) => (
      <TouchableOpacity
        key={route.id}
        style={styles.routeCard}
        onPress={handleRoutePress}
      >
        <Image source={route.image} style={styles.routeCardImage} />
        <View style={styles.routeCardContent}>
          <Text style={styles.routeCardTitle}>{route.title}</Text>
          <Text style={styles.routeCardDetails}>{route.details}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rutas disponibles para pasajeros</Text>
      <View style={styles.routeCardsContainer}>{renderRoutes()}</View>
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
  routeCardsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: 800,
  },
  routeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    padding: 16,
    backgroundColor: '#EDEDED', // Cambiar a color de fondo deseado
    width: '100%', // Agregar ancho del 100%
    cursor: 'pointer',
    transitionDuration: '0.3s',
  },
  routeCardImage: {
    marginRight: 16,
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  routeCardContent: {
    flex: 1,
  },
  routeCardTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  routeCardDetails: {
    fontSize: 14,
    color: '#888', // Cambiar a color de texto deseado
  },
});

export default PasajerosScreen;
