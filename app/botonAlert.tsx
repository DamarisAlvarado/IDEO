import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Para la navegación
import React from 'react';
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BotonAlert() {
  const router = useRouter(); // Hook para navegar

  const handleCall911 = () => {
    const phoneNumber = '911';
    Alert.alert(
      'Llamar al 911',
      '¿Estás seguro de que quieres llamar a emergencias?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Llamar',
          style: 'destructive',
          onPress: () => {
            Linking.openURL(`tel:${phoneNumber}`).catch((err) =>
              console.error('Error al intentar llamar:', err)
            );
          },
        },
      ]
    );
  };

  // Para navegar a la pantalla del mapa
  const handleGoToMap = () => {
    // Basado en la estructura de tu app ("app/Mapa/mapa.tsx"), 
    // la ruta en Expo Router es '/Mapa/mapa'
    router.push('/Mapa/mapa');
  };

  // Para regresar al menú anterior
  const handleGoBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={24} color="#555" />
        <Text style={styles.backButtonText}>Regresar al Menú</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.callButton]} onPress={handleCall911}>
          <Ionicons name="call" size={40} color="white" />
          <Text style={styles.buttonText}>Llamar al 911</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.mapButton]} onPress={handleGoToMap}>
          <Ionicons name="map" size={40} color="white" />
          <Text style={styles.buttonText}>Compartir Ubicación</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}> Al presionar Compartir Ubicación, serás llevada al mapa donde podrás activar el botón SOS{"\n"}para enviar tu ubicación actual.
</Text>


      </View>
    </View>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Un fondo un poco más suave
    paddingTop: 60, // Espacio para el botón de regreso
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: 'absolute',
    top: 60, // Ajusta según la barra de estado de tu tel
    left: 10,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 8,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    width: '90%', // Ancho del botón
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 20, // Bordes más redondeados
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30, // Espacio entre botones
    elevation: 8, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  callButton: {
    backgroundColor: '#d9534f', // Rojo de emergencia
  },
  mapButton: {
    backgroundColor: '#FF69B4', // Rosa
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  infoText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
    fontSize: 14,
    paddingHorizontal: 30,
  }
});