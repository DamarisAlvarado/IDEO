import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/globalStyles';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native';

export default function Registrar() {
       const router = useRouter();
       const [username, setUsername] = React.useState('');
       const [email, setEmail] = React.useState('');
       const [password, setPassword] = React.useState('');
     

const EnviarDatos = async () => {
  try {
    const info = { username, email, password };
    const res = await fetch('http://10.22.111.246:5000/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info),
    });

    const data = await res.json();

    if (!res.ok) {
      // Error del servidor
      Alert.alert('Error', data.message || 'Error al registrar usuario');
    
      return;
    }

    // Limpiar campos
    setUsername('');
    setEmail('');
    setPassword('');

    // Alerta con botón OK
    Alert.alert(
      'Éxito',
      'Usuario agregado correctamente',
      [
        {
          text: 'OK',
          onPress: () => router.push('/login'), // Navega al cerrar alerta
        },
      ],
      { cancelable: false }
    );

  } catch (error) {
    console.log(error);
    Alert.alert('Error', 'Ocurrió un error al registrar');
  }
};


  return (
   
       <View style={globalStyles.contenedorP}>
   
       <Image style={globalStyles.LogoPrin} source={require('../assets/images/logo.png')} />
       <TextInput style={globalStyles.Inputs} placeholder='Usuario' value={username}  onChangeText={setUsername}  />
       <TextInput style={globalStyles.Inputs} keyboardType='email-address' placeholder='Correo Electronico'value={email}  onChangeText={setEmail}  />
       <TextInput style={globalStyles.Inputs}secureTextEntry={true} placeholder='Contraseña' value={password}  onChangeText={setPassword} />
       <Pressable
            style={({ pressed }) => [
              globalStyles.btonregistrar,
              pressed ? { opacity: 0.7 } : { opacity: 1 },
            ]}
            onPress={EnviarDatos}>
            <Text style={{color:'white', fontWeight:'bold', fontSize: 20}}>Registrar</Text>
          </Pressable>
          <Text style={{ margin: 20 }}>
            ¿No tienes una cuenta?
            <Text style={{ color: Colors.text1 ,fontWeight:'bold' }} onPress={() => router.push('/login')}>  Iniciar Sesión</Text>
          </Text> 
       </View>

  )
}