import { globalStyles } from '@/styles/globalStyles';
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';


export default function Login() {
    const router = useRouter();
  return (
    <View style={globalStyles.contenedorP}>

    <Image style={globalStyles.LogoPrin} source={require('../assets/images/logo.png')} />
    <TextInput style={globalStyles.Inputs} keyboardType='email-address' placeholder='Correo Electronico' />

    <TextInput style={[globalStyles.Inputs, { marginBottom: 50 }]}secureTextEntry={true} placeholder='Contraseña'/>
     <Button 
        title="Entrar" 
        onPress={() => router.push('/registrar')} 
      /> 

       <Text style={{margin:20}}>¿No tienes una cuenta?  
                <Text 
               onPress={() => router.push('/registrar')} 
              >  Registrate
              </Text>
          </Text>      
    </View>
  )
}