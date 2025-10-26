import ContactosCard from '@/components/ContactosCard';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useSearchParams } from 'expo-router/build/hooks';
import React, { useEffect, useState } from 'react';
import { Alert, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Dialog from "react-native-dialog";
import { globalStyles } from '../../styles/globalStyles';
export default function ContacE() {

    const [visible, setVisible] = useState(false);
    const [Nombre, setnombre] = useState('');
    const [Apellido, setapellido] = useState('');
    const [Telefono, settelefono] = useState('');
    const [datacontactos, setdataContactos] = useState<any[]>([]); 
    
    const [userId, setUserId] = useState(null);
    const searchParams = useSearchParams();
    const username = searchParams.get('username');
    console.log("Usuario en Contactos de Emergencia:", username);

   useEffect(() => {
  async function fetchUserId() {
    try {
      if (!username) return; 

      const res = await fetch(`http://10.22.118.41:5000/usuarioid?username=${username}`);

      if (!res.ok) throw new Error('Usuario no encontrado');

      const data = await res.json();

      console.log("ID del usuario:", data.id);
      const id = data.id;
      console.log("ID almacenado:", id);
      setUserId(data.id);
    } catch (error) {
      console.error('Error al obtener userId:', error);
    }
  }

  fetchUserId();
}, [username]);

useEffect(() => {
  const fetchContactos = async () => {
    try {
      if (!userId) return; // espera a que userId esté definido

      const res = await fetch(`http://10.22.118.41:5000/contactos?userid=${userId}`);
      if (!res.ok) throw new Error("Error al obtener contactos");

      const data = await res.json();
      console.log("Contactos cargados:", data);

      setdataContactos(data);
    } catch (error) {
      console.error("Error al cargar contactos:", error);
    }
  };

  fetchContactos();
}, [userId]); // se ejecuta cuando userId cambie



const EnviarDatos = async () => {
  try {
    if (!Nombre.trim() || !Apellido.trim() || !Telefono.trim()) {
      Alert.alert('Campos incompletos', 'Por favor completa todos los campos.');
      return false;
    }

    if (!userId) {
      Alert.alert('Error', 'No se ha encontrado el usuario. Intenta de nuevo.');
      return false;
    }

    const info = { id: userId, Nombre, Apellido, Telefono };
    const res = await fetch('http://10.22.118.41:5000/crearContacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info),
    });

    const data = await res.json();

    if (!res.ok) {
      Alert.alert('Error', data.message || 'Error al registrar contacto.');
      return false;
    }

    setnombre('');
    setapellido('');
    settelefono('');
    setdataContactos(prev => [...prev, data.usuario]);
    Alert.alert('Éxito', 'Contacto agregado correctamente.');
    return true;

  } catch (error) {
    console.error('Error al registrar contacto:', error);
    Alert.alert('Error', 'Ocurrió un error al registrar el contacto.');
    return false;
  }
};

  return (
    
      <View style={{ padding:30, margin:50, width: '100%', justifyContent: 'center' }}> 
       <TouchableOpacity style={globalStyles.backButton}onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>

      <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" , marginBottom: 20}}>Contactos</Text>

      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        {datacontactos.map(c => (
          <ContactosCard
             key={c.contactid?.toString() ?? Math.random().toString()}
            nombre={c.nombre} 
            apellido={c.apellido} 
            telefono={c.telefono} 
               />
))}
   
       </ScrollView>
          
          
          <View style={{ justifyContent: "center", alignItems: "center", width: "100%", marginTop:20}}>
         <Pressable style={[globalStyles.BotonAgregar]} onPress={() => setVisible(true)}>
           <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Agregar Usuario</Text>
          </Pressable>

        </View>

        <Dialog.Container visible={visible}>
        <Dialog.Title style={{ color:Colors.botones }}>Agregar Contacto</Dialog.Title>
        <Dialog.Description style={{color:'black'}}>
            Por favor ingresa la información en la siguiente pantalla.
        </Dialog.Description>

        <Dialog.Input  value={Nombre} onChangeText={setnombre} style={{color:Colors.botones}} placeholder="Nombre(s)" />
        <Dialog.Input value={Apellido} onChangeText={setapellido} style={{color:Colors.botones}} placeholder="Apellido(s)" />
        <Dialog.Input value={Telefono} onChangeText={settelefono} style={{color:Colors.botones}} keyboardType="number-pad"  placeholder="Número de teléfono" />
        <Dialog.Button label="Cancelar" onPress={() => setVisible(false)} />
        <Dialog.Button label="Agregar" onPress={() => {
            console.log("Contacto agregado: " + Nombre + " " + Apellido + ", Tel: " + Telefono);
            setVisible(false);
            EnviarDatos();
        }} />
        </Dialog.Container>
      
        </View>
    ) }


    
