/* eslint-disable react-hooks/rules-of-hooks */
import ImagePerfil from '@/components/ImagePerfil';
import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/globalStyles';
import { router } from 'expo-router';
import { useSearchParams } from 'expo-router/build/hooks';
import * as React from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import Dialog from "react-native-dialog";

export default function perfil() {

     const searchParams = useSearchParams();
    const username = searchParams.get('username');
    console.log("Usuario logueado:", username);
    const [visible, setVisible] = React.useState(false);

    const [dataContactos, setDataContactos] = React.useState({
  username: '',
  email: '',
  password: '',
  usernameOld: '', // <- campo para el username original
});

React.useEffect(() => {
  const fetchObtenerID = async () => {
    try {
      if (!username) return;

      const res = await fetch(`http://10.22.118.41:5000/usuarioOBT?userid=${username}`);
      const data = await res.json();

      if (data) {
        setDataContactos({
          ...data,
          usernameOld: data.username, // guardamos el username original
        });
      }
    } catch (error) {
      console.log("Error al obtener los contactos:", error);
    }
  };

  fetchObtenerID();
}, [username]);


const EnviarDatos = async () => {
  try {
    const info = {
      usernameOld: dataContactos.usernameOld,
      username: dataContactos.username,       
      email: dataContactos.email,
      password: dataContactos.password,
    };

    const res = await fetch('http://10.22.118.41:5000/ModificarU', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info),
    });

    const data = await res.json();

    if (!res.ok) {
      Alert.alert('Error', data.message || 'Error al modificar usuario');
      return;
    }

    Alert.alert('Éxito', 'Usuario modificado correctamente');
  } catch (error) {
    console.log(error);
    Alert.alert('Error', 'Ocurrió un error al modificar usuario');
  }
};

  return (
    <View style={[{ backgroundColor: Colors.fondo, flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
        <ImagePerfil/>
        <Text style={{fontWeight: 'bold' , margin:20 , fontSize: 20}}>Mi perfil</Text>
        <Text style={{fontWeight: 'bold' , marginBottom:10 , fontSize: 20}}>{username}</Text>

        <Pressable style={({ pressed }) => [
                  globalStyles.btonPerfil,
                  pressed ? { opacity: 0.7 } : { opacity: 1 },
                ]}
                onPress={() =>  router.push({ pathname: "/Perfil/contacE", params: { username: username } }) }>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Contactos de Emergencia</Text>
        </Pressable>

         <Pressable style={({ pressed }) => [
                  globalStyles.btonPerfil,
                  pressed ? { opacity: 0.7 } : { opacity: 1 },
                ]}
                onPress={() => setVisible(true)}>
            <Text  style={{color: 'white', fontWeight: 'bold'}}>Modificar Datos</Text>
        </Pressable>

         <Pressable style={({ pressed }) => [
                  globalStyles.btonPerfil,
                  pressed ? { opacity: 0.7 } : { opacity: 1 },
                ]}
                onPress={() => router.push('/Perfil/premium')}>
            <Text  style={{color: 'white', fontWeight: 'bold'}}>Suscripción Premuim</Text>
        </Pressable>
        <Pressable style={({ pressed }) => [
                  globalStyles.btonPerfil,
                  pressed ? { opacity: 0.7 } : { opacity: 1 },
                ]}
                onPress={() => router.push('/menuIntermedio')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Cerrar Sesión</Text>
        </Pressable>

        <Dialog.Container visible={visible}>
        <Dialog.Title style={{ color:Colors.botones }}>Editar Perfil </Dialog.Title>
        <Dialog.Description style={{color:'black'}}>
            Por favor ingresa editar la información a modificar en la siguiente pantalla.
        </Dialog.Description>

        <Dialog.Input  value={dataContactos.username}   onChangeText={(text) => setDataContactos({ ...dataContactos, username: text })} style={{color:Colors.botones}} placeholder={dataContactos.username} />
        <Dialog.Input  value={dataContactos.email} onChangeText={(text) => setDataContactos({ ...dataContactos, email: text })} style={{color:Colors.botones}} placeholder="Correo Electrónico" />
        <Dialog.Input  value={dataContactos.password} secureTextEntry={true} onChangeText={(text) => setDataContactos({ ...dataContactos, password: text })} style={{color:Colors.botones}} placeholder="Contraseña" />
        <Dialog.Button label="Cancelar" onPress={() => setVisible(false)} />
        <Dialog.Button label="Modificar" onPress={() => {
          //  console.log("Contacto agregado: " + Nombre + " " + Apellido + ", Tel: " + Telefono);
            setVisible(false);
            EnviarDatos();
        }} />
        </Dialog.Container>
        
    </View>
  )
}


