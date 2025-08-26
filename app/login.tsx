import React from 'react';
import { Button, Text, View } from 'react-native';
import { HomeButton } from '../components/HomeButton';


export default function index() {
  return (
    <View>
    <Text>Login</Text>
      <Button 
        title="ghh" 
        onPress={() => console.log('hola')} 
      />    
      <HomeButton label="Perfil"/>
    </View>
  )
}