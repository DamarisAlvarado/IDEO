import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import * as React from 'react';
import { useEffect, useState } from 'react';

import { Image, TouchableOpacity, View } from 'react-native';

const STORAGE_KEY = 'PROFILE_IMAGE_URI';

export default function Perfil() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Cargar la imagen guardada al iniciar
  useEffect(() => {
    const loadImage = async () => {
      const uri = await AsyncStorage.getItem(STORAGE_KEY);
      if (uri) setSelectedImage(uri);
    };
    loadImage();
  }, []);

  // Guardar la imagen seleccionada
  const handlePickImage = async () => {
    try {
      const result = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled && result.assets && result.assets.length > 0) {
        const uri = result.assets[0].uri;
        setSelectedImage(uri);
        await AsyncStorage.setItem(STORAGE_KEY, uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  return (
  
      <View>
        <TouchableOpacity
          onPress={handlePickImage}
        >
          <Image
            source={
              selectedImage
                ? { uri: selectedImage }
                : require('../assets/images/botonalerta.png')
            }
            style={{ height: 200, width: 200, borderRadius: 100 }}
          />
        </TouchableOpacity>
      </View>
  );
}