import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
// Importamos Marker y Polyline para los puntos y la ruta
import * as Location from 'expo-location';
import MapView, { Marker, Polyline, PROVIDER_DEFAULT, UrlTile } from 'react-native-maps';

// --- TUS LLAVES (API KEYS) ---

// 1. Esta es tu llave de MapTiler (para MOSTRAR el mapa)
const maptilerApiKey = 'CHx5f67iF7Ex7OEaa6Qt';
const maptilerUrl = `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${maptilerApiKey}`;

// 2. Esta es tu llave de OpenRouteService (para CALCULAR la ruta)
const orsApiKey = 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjgyMGMyNTUxZTNjZTQ3YzBiOWMyZjk1ODg2MDFkMjMxIiwiaCI6Im11cm11cjY0In0=';

// --- FIN DE LAS LLAVES ---


// Coordenadas iniciales (Nuevo Leon)
const initialRegion = {
  latitude: 25.6866,
  longitude: -100.3161,
  latitudeDelta: 0.5,
  longitudeDelta: 0.5,
};

// Definición de un punto
interface PinkPoint {
  latitude: number;
  longitude: number;
}

export default function Mapa() {
  
  // Estado para guardar los puntos rosas
  const [safeZones, setSafeZones] = useState<PinkPoint[]>([]);
  // Estado para guardar la línea de la ruta
  const [routeCoords, setRouteCoords] = useState<PinkPoint[]>([]);

  // Pedir permisos de ubicación
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'No podemos mostrar tu ubicación sin permiso.');
      }
    })();
  }, []);

  // Función para poner un marcador rosa al tocar
  const handleMapPress = (event: any) => {
    const newPoint = event.nativeEvent.coordinate;
    // Añadimos el nuevo punto a la lista
    setSafeZones(currentZones => [...currentZones, newPoint]);
    Alert.alert("Nueva Zona Segura", "Has marcado una nueva zona segura.");
  };

  // Función para obtener la ruta (¡Usa la llave ORS!)
  const getDirections = async (destination: PinkPoint) => {
    
    // 1. Obtener ubicación actual
    let location = await Location.getLastKnownPositionAsync({});
    if (!location) {
      Alert.alert("Error", "No podemos obtener tu ubicación actual.");
      return;
    }
    const start = location.coords;
    
    // 2. Llamar al API de rutas
    try {
      const body = JSON.stringify({
        'coordinates': [
          [start.longitude, start.latitude], // [lon, lat]
          [destination.longitude, destination.latitude] // [lon, lat]
        ]
      });

      const response = await fetch(`https://api.openrouteservice.org/v2/directions/driving-car`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/geo+json',
          'Content-Type': 'application/json',
          'Authorization': orsApiKey // <-- ¡Usa la llave de rutas!
        },
        body: body
      });
      
      const json = await response.json();
      
      // Convertir la respuesta del API a coordenadas de mapa
      const coords = json.routes[0].geometry.coordinates.map((c: number[]) => ({
        longitude: c[0],
        latitude: c[1]
      }));
      
      setRouteCoords(coords); // Guardar la ruta para dibujarla

    } catch (error) {
      console.error(error);
      Alert.alert("Error de ruta", "No se pudo calcular la trayectoria.");
    }
  };


  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        initialRegion={initialRegion}
        showsUserLocation={true} // <-- Muestra punto azul
        onPress={handleMapPress} // <-- Permite poner marcadores al tocar
      >
        
        {/* Le decimos al mapa que use MapTiler */}
        <UrlTile
          urlTemplate={maptilerUrl}
          maximumZ={19}
          tileSize={512} 
        />
        
        {/* Dibuja los marcadores rosas */}
        {safeZones.map((point, index) => (
          <Marker
            key={index} 
            coordinate={point} 
            title={`Zona Segura ${index + 1}`}
            pinColor="pink"
            onPress={() => getDirections(point)} // <-- Tocar el marcador calcula la ruta
          />
        ))}
        
        {/* Dibuja la línea de la ruta */}
        {routeCoords.length > 0 && (
          <Polyline
            coordinates={routeCoords}
            strokeColor="#007BFF" // Color azul
            strokeWidth={8}
          />
        )}
        
      </MapView>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: { ...StyleSheet.absoluteFillObject },
  map: { ...StyleSheet.absoluteFillObject },
});