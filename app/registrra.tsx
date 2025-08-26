import React from 'react'
import { Button, Text, View } from 'react-native'

export default function index() {
  return (
    <View>
    <Text>Registrar</Text>
      <Button 
        title="ghh" 
        onPress={() => console.log('hola')} 
      />    
    </View>
  )
}