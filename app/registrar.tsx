import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/globalStyles';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';

export default function Registrar() {
       const router = useRouter();

  return (
   
       <View style={globalStyles.contenedorP}>
   
       <Image style={globalStyles.LogoPrin} source={require('../assets/images/logo.png')} />
       <TextInput style={globalStyles.Inputs} keyboardType='email-address' placeholder='Correo Electronico' />
   
       <TextInput style={globalStyles.Inputs}secureTextEntry={true} placeholder='Contraseña'/>
       <TextInput style={[globalStyles.Inputs, { marginBottom: 50 }]}secureTextEntry={true} placeholder='Confirmar Contraseña'/>
       <Pressable
            style={({ pressed }) => [
              globalStyles.btonregistrar,
              pressed ? { opacity: 0.7 } : { opacity: 1 },
            ]}
            onPress={() => router.push('/login')}
          >
            <Text style={{color:'white', fontWeight:'bold', fontSize: 20}}>Registrar</Text>
          </Pressable>
          <Text style={{ margin: 20 }}>
            ¿No tienes una cuenta?
            <Text style={{ color: Colors.text1 ,fontWeight:'bold' }} onPress={() => router.push('/login')}>  Iniciar Sesión</Text>
          </Text> 
       </View>

  )
}