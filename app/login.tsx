import React from 'react';
import { Button, Text, View } from 'react-native';


export default function index({Navigation}) {
  return (
    <View>
    <Text>Login</Text>
     <Button 
        title="ghh" 
        onPress={() => console.log('hola')} 
      />    
    </View>
  )
}