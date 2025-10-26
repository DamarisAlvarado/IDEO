import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
// --- ¡CAMBIO 1! Es 'Share', no 'Sharing' ---
import { Alert, Image, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_DEFAULT, UrlTile } from 'react-native-maps';


// --- ÍCONOS PERSONALIZADOS ---
const tecIcon = require('../../assets/images/tec.jpg');
const chubbIcon = require('../../assets/images/chubb.jpg');
const banorteIcon = require('../../assets/images/banorte.jpg');
const softtekIcon = require('../../assets/images/sofftek.jpg');
const oracleIcon = require('../../assets/images/oracle.jpg');
// --- FIN DE ÍCONOS ---

// --- LLAVES DE API ---
const maptilerApiKey = 'CHx5f67iF7Ex7OEaa6Qt';
const maptilerUrl = `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${maptilerApiKey}`;
// --- FIN DE LLAVES ---

// --- DEFINICIONES DE PUNTOS ---
interface PinkPoint {
  latitude: number;
  longitude: number;
  title: string;
  description: string;
  image?: any;
}
const DEFAULT_ZONES: PinkPoint[] = [
  { latitude: 25.65139, longitude: -100.29056, title: "Tec de Monterrey", description: "Av. Eugenio Garza Sada 2501 Sur, Tecnológico, Monterrey", image: tecIcon },
  { latitude: 25.66690, longitude: -100.34480, title: "Chubb", description: "Av. Ignacio Morones Prieto 2424-Pte, Sertoma, Monterrey", image: chubbIcon },
  { latitude: 25.65820, longitude: -100.28890, title: "Banorte", description: "Avenida Revolución 3000, Colonia La Primavera, Monterrey", image: banorteIcon },
  { latitude: 25.67306, longitude: -100.39167, title: "Softtek", description: "Constitución 3098-piso 6, Santa María, Monterrey", image: softtekIcon },
  { latitude: 25.65990, longitude: -100.38040, title: "Oracle", description: "San Alberto 112, Residencial Santa Barbara, San Pedro Garza García", image: oracleIcon }
];
const initialRegion = {
  latitude: 25.6866,
  longitude: -100.3161,
  latitudeDelta: 0.5,
  longitudeDelta: 0.5,
};
// --- FIN DE DEFINICIONES ---


export default function Mapa() {
  
  const [safeZones, setSafeZones] = useState<PinkPoint[]>(DEFAULT_ZONES);
  const [isAddingMode, setIsAddingMode] = useState<boolean>(false);
  const [currentLocation, setCurrentLocation] = useState<Location.LocationObject | null>(null);
  const router = useRouter();
  const locationSubscription = useRef<Location.LocationSubscription | null>(null);

    useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'No podemos leer tu ubicación para emergencias.');
        return;
      }
      locationSubscription.current = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, timeInterval: 10000, distanceInterval: 10 },
        (location) => {
          setCurrentLocation(location);
          console.log('Nueva ubicación guardada:', location.coords.latitude, location.coords.longitude);
        }
      );
    })();
    return () => {
      if (locationSubscription.current) {
        locationSubscription.current.remove();
      }
    };
  }, []);

    const handleMapPress = (event: any) => {
    if (!isAddingMode) return;
    const newCoord = event.nativeEvent.coordinate;
    const newPoint: PinkPoint = { ...newCoord, title: "Zona Segura Personalizada", description: "Añadida por el usuario" };
    setSafeZones(currentZones => [...currentZones, newPoint]);
    Alert.alert("Nueva Zona Segura", "Has marcado una nueva zona segura.");
  };

 
  const handlePanicButtonPress = async () => {
    if (currentLocation) {
      const { latitude, longitude } = currentLocation.coords;
      const message = `¡EMERGENCIA! Necesito ayuda. Esta es mi ubicación en tiempo real:`;
      const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

      try {
        await Share.share({ // <-- ¡CORREGIDO!
          message: `${message}\n\n${googleMapsUrl}`,
          title: '¡Alerta de Emergencia!',
        });
        
      } catch (error) {
        Alert.alert('Error', 'No se pudo abrir el menú para compartir.');
      }

    } else {
      Alert.alert('Error', 'Aún no hemos podido obtener tu ubicación. Muevete un poco e intenta de nuevo.');
    }
  };
  // --- FIN DEL CAMBIO ---

  const deleteZone = (pointToDelete: PinkPoint) => {
    setSafeZones(currentZones => 
      currentZones.filter(zone => 
        zone.latitude !== pointToDelete.latitude || 
        zone.longitude !== pointToDelete.longitude
      )
    );
  };

  const showDeleteAlert = (point: PinkPoint) => {
    Alert.alert(
      "Eliminar Punto",
      "¿Estás seguro de que quieres eliminar esta zona segura?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Eliminar", style: "destructive", onPress: () => deleteZone(point) }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        initialRegion={initialRegion}
        showsUserLocation={true}
        onPress={handleMapPress}
      >
        
        <UrlTile urlTemplate={maptilerUrl} maximumZ={19} tileSize={512} />
        
        {safeZones.map((point, index) => (
          <Marker
            key={index} 
            coordinate={point} 
            pinColor={!point.image ? 'pink' : undefined}
          >
            {point.image && (
              <Image
                source={point.image}
                style={styles.markerImage}
                resizeMode="cover"
              />
            )}
            
            {!isAddingMode && (
              <Callout 
                style={styles.calloutContainer}
                onPress={!point.image ? () => showDeleteAlert(point) : undefined}
              >
                <View>
                  <Text style={styles.calloutTitle}>{point.title}</Text>
                  {point.description && <Text>{point.description}</Text>}
                  {!point.image && (
                    <View style={styles.deleteButton}>
                      <Text style={styles.deleteButtonText}>Eliminar</Text>
                    </View>
                  )}
                </View>
              </Callout>
            )}
          </Marker>
        ))}
        
      </MapView>

      {/* Botón "Añadir Puntos" */}
      <TouchableOpacity
        style={[styles.addButton, isAddingMode ? styles.addButtonActive : null]}
        onPress={() => { setIsAddingMode(!isAddingMode); }}
      >
        <Text style={styles.addButtonText}>
          {isAddingMode ? "Dejar de Añadir" : "Añadir Puntos"}
        </Text>
      </TouchableOpacity>
      
      {/* Botón "Regresar" */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      {/* Botón de Pánico "SOS" */}
      <TouchableOpacity
        style={styles.panicButton}
        onPress={handlePanicButtonPress}
      >
        <Text style={styles.addButtonText}>SOS</Text>
      </TouchableOpacity>
      
    </View>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  addButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: '#FF69B4',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  addButtonActive: {
    backgroundColor: '#C71585',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  markerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#FF69B4',
    overflow: 'hidden',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  panicButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: 'red',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  calloutContainer: {
    width: 200,
    padding: 5,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#FF5C5C',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  deleteButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});