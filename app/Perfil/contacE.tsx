import ContactosCard from '@/components/ContactosCard';
import { Colors } from '@/constants/Colors';
import React, { useEffect, useState } from 'react';
import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import Dialog from "react-native-dialog";
import { globalStyles } from '../../styles/globalStyles';
export default function ContacE() {

    const [visible, setVisible] = useState(false);
    const [Nombre, setnombre] = useState('');
    const [Apellido, setapellido] = useState('');
    const [Telefono, settelefono] = useState('');
    const [datacontactos, setdataContactos] = useState<any[]>([]); 

    useEffect(() => {
  const fetchContactos = async () => {
    try {
      const res = await fetch('http://10.22.111.246:5000/crearContacto'); 
      const data = await res.json();
      setdataContactos(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchContactos();
}, []);


    const EnviarDatos = async () => {
      try {
        const info = { Nombre , Apellido, Telefono };
        const res = await fetch('http://10.22.111.246:5000/crearContacto', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(info),
        });
    
        const data = await res.json();
    
        if (!res.ok) {
          // Error del servidor
          Alert.alert('Error', data.message || 'Error al registrar Contacto');
        
          return;
        }
    
        // Limpiar campos
        setnombre('');
        setapellido('');
        settelefono('');

        setdataContactos(prev => {
        console.log('Estado previo:', prev);
        return [...prev, data.usuario];
      });
   
        // Alerta con botón OK
        Alert.alert(
          'Éxito',
          'Usuario agregado correctamente',
        );
    
      } catch (error) {
        console.log(error);
        Alert.alert('Error', 'Ocurrió un error al registrar');
      }
    };
    
    
  return (
      <View style={{ padding:30, margin:50, width: '100%', justifyContent: 'center' }}> 

      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center"}}>Contactos</Text>

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
           <Text style={{color: 'white', fontWeight: 'bold'}}>Agregar Usuario</Text>
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

