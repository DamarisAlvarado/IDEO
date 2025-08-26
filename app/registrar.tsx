import { globalStyles } from '@/styles/globalStyles';
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';

export default function Registrar() {
       const router = useRouter();

  return (
   
       <View style={globalStyles.contenedorP}>
   
       <Image style={globalStyles.LogoPrin} source={require('../assets/images/logo.png')} />
       <TextInput style={globalStyles.Inputs} keyboardType='email-address' placeholder='Correo Electronico' />
   
       <TextInput style={globalStyles.Inputs}secureTextEntry={true} placeholder='Contraseña'/>
       <TextInput style={[globalStyles.Inputs, { marginBottom: 50 }]}secureTextEntry={true} placeholder='Confirmar Contraseña'/>
        <Button 
           title="Registrar" 
           onPress={() => router.push('/login')} 
         /> 
   
         <Text style={{margin:20}}>¿Ya tienes cuenta? 
          <Text 
          onPress={() => router.push("/login")} 
        >  Iniciar
        </Text>
    </Text>   
       </View>

  )
}