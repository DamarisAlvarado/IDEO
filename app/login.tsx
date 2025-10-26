import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function Login() {
    const router = useRouter();
    const [username, setusername] = React.useState('');
    const [password, setPassword] = React.useState('');



    const IniciarS = async () => {
  try {
     if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Los campos no pueden estar vacío.');
      return;
    }
    const res = await fetch('http://10.22.118.41:5000/login', {
  
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const { message, usuario } = await res.json();

    if (!res.ok) {
      return Alert.alert("⚠️ Error", message || "Error al iniciar sesión");
    }

    setusername("");
    setPassword("");

    Alert.alert("✅ Éxito", `Bienvenido ${usuario.username}`, [
      { text: "OK", onPress: () => 
        router.push({ pathname: "/menu", params: { username: usuario.username } }) },
    ]);
    
  } catch (error: any) {
    console.log(error);
    Alert.alert("⚠️ Error", "Ocurrió un error al iniciar sesión");
  }
};




  return (
    <View style={globalStyles.contenedorP}>
      <TouchableOpacity style={globalStyles.backButton}onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <Image style={globalStyles.LogoPrin} source={require('../assets/images/logo.png')} />
      <TextInput style={globalStyles.Inputs}  keyboardType='email-address' placeholder='Usuario' onChangeText={setusername} />
      <TextInput style={[globalStyles.Inputs]} secureTextEntry={true} placeholder='Contraseña' onChangeText={setPassword} />
      <Pressable
        style={({ pressed }) => [
          globalStyles.btonlogin,
          pressed ? { opacity: 0.7 } : { opacity: 1 },
        ]}
        onPress={IniciarS}
      >
        <Text style={{color:'white', fontWeight:'bold', fontSize: 20}}>Iniciar Sesión</Text>
      </Pressable>
      <Text style={{ margin: 20 }}>
        ¿No tienes una cuenta?
        <Text style={{ color: Colors.text1 ,fontWeight:'bold' }} onPress={() => router.push('/registrar')}>  Registrate</Text>
      </Text>
    </View>
  )
}