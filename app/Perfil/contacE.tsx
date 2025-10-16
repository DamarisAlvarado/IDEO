import ContactosCard from '@/components/ContactosCard'
import React from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

export default function contacE() {
  return (
      <View style={{ padding:30, margin:50, width: '100%', justifyContent: 'center'}}> 

      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center"}}>Contactos</Text>

      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <ContactosCard />
       </ScrollView>
          <View style={{ justifyContent: "center", alignItems: "center", width: "100%", marginTop:20}}>
           <Pressable style={{ justifyContent: "center", alignItems: "center", width: "70%", padding: 16, backgroundColor: "lightgreen", borderRadius: 20 }} >
            <Text> Agregar Uusuario</Text>
           </Pressable>
        </View>
      
        </View>

        
       
              
            
            ) }

