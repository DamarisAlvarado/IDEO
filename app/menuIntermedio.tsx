import { HomeButton } from '@/components/HomeButton';
import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function menuIntermedio() {
  return (
   <View>
    <HomeButton estitlo='Botones' onPress={()=> router.push('/botonAlert')} label='Boton de Alerta' Image={'btnalerta'}/>    
    <HomeButton estitlo='Botones' onPress={() => router.push('/Perfil/contacE')} label='Home' Image={'inicio'} />  
  </View>
  )
}