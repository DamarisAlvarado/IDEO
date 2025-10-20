import { HomeButton } from '@/components/HomeButton'
import { router } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

export default function violencia() {
  return (
    <View>
      <HomeButton estitlo='container2' onPress={() => router.push('/menu')} label='Violentómetro' Image={'violentometro'}/>
      <HomeButton estitlo='container2' onPress={() => router.push('/Violencia/quizz')} label='Test de Violencia' Image={'violencia'}/>
      <HomeButton estitlo='container2' onPress={() => router.push('/menu')} label='Centros de atención' Image={'centros'}/>
    </View>
  )
}