import { HomeButton } from '@/components/HomeButton';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export default function servicios() {
  return (
   <View >
    <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
    <HomeButton estitlo='Botones' onPress={()=> console.log('Click')} label='GAS' Image={'gas'}/>    
    <HomeButton estitlo='Botones' onPress={() => console.log('Click')} label='TELMEX' Image={'internet'} /> 
    <HomeButton estitlo='Botones' onPress={()=> console.log('Click')} label='AGUA' Image={'agua'}/>    
    <HomeButton estitlo='Botones' onPress={() => console.log('Click')} label='CFE' Image={'luz'} />   
  </View>
  )
}