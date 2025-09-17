import ImagePerfil from '@/components/ImagePerfil';
import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/globalStyles';
import { router } from 'expo-router';
import * as React from 'react';
import { Pressable, Text, View } from 'react-native';

export default function perfil() {
  return (
    <View style={[{ backgroundColor: Colors.fondo, flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
        <ImagePerfil/>
        <Text style={{fontWeight: 'bold' , margin:20 , fontSize: 20}}>Mi perfil</Text>
        <Text style={{fontWeight: 'bold' , marginBottom:10 , fontSize: 20}}>Damaris Alvarado</Text>

        <Pressable style={({ pressed }) => [
                  globalStyles.btonPerfil,
                  pressed ? { opacity: 0.7 } : { opacity: 1 },
                ]}
                onPress={() => router.push('/Perfil/contacE')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Contactos de Emergencia</Text>
        </Pressable>

         <Pressable style={({ pressed }) => [
                  globalStyles.btonPerfil,
                  pressed ? { opacity: 0.7 } : { opacity: 1 },
                ]}
                onPress={() => router.push('/Perfil/updateD')}>
            <Text  style={{color: 'white', fontWeight: 'bold'}}>Modificar Datos</Text>
        </Pressable>

         <Pressable style={({ pressed }) => [
                  globalStyles.btonPerfil,
                  pressed ? { opacity: 0.7 } : { opacity: 1 },
                ]}
                onPress={() => router.push('/Perfil/premium')}>
            <Text  style={{color: 'white', fontWeight: 'bold'}}>Suscripción Premuim</Text>
        </Pressable>
        <Pressable style={({ pressed }) => [
                  globalStyles.btonPerfil,
                  pressed ? { opacity: 0.7 } : { opacity: 1 },
                ]}
                onPress={() => router.push('/menuIntermedio')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Cerrar Sesión</Text>
        </Pressable>
        
    </View>
  )
}