import { globalStyles } from '@/styles/globalStyles';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export default function PremiumScreen() {
  return (
    <View style={{ width:'100%', height:'100%', flex: 1 ,backgroundColor: '#061a1c'} }>
      <Text style={{ color: 'white', fontSize: 50, padding:20, marginLeft:10 ,marginTop:80 }}>Obtén acceso</Text>
      <Text style={{ color: '#28c8d3', fontSize: 50, marginTop: 10, marginLeft: 30 }}>premium</Text>

      <Text style={{ color: 'white', fontSize: 18, marginTop: 80, textAlign: 'justify', paddingHorizontal: 20 }}>
      Con el Plan Premium, tu protección se eleva:  {"\n"}
        {"\n"}  • Registra un número ilimitado de Puntos Seguros (hogar, trabajo, escuela, etc.){"\n"}
        {"\n"}  •Ruta Segura Proactiva: Monitoreo en tiempo real de tus trayectorias habituales con alertas de tu ruta.{"\n"}
      </Text>
     <View style={{ flexDirection: "row",     justifyContent: "space-between", alignItems: "flex-start", width: "90%",margin: 30}}>
      
      <View style={{ 
        flexDirection: "column", 
        alignItems: "center",    
        justifyContent: "center",
        backgroundColor: "#B7B1C9", 
        padding: 10, 
        marginLeft:50,
        borderRadius: 10, 
        width: "30%"
      }}>
        <Text style={{fontWeight: 'bold', textAlign: "center"}}>1 mes </Text> 
        <Text style={{textAlign: "center" ,  textDecorationLine: "line-through" }}>$399</Text>
         <Text style={{textAlign: "center"}}>$150</Text>
      </View>

      <View style={{ 
        flexDirection: "column", 
        alignItems: "center",    
        justifyContent: "center",
        backgroundColor: "#B7B1C9", 
        padding: 10, 
        borderRadius: 10, 
        marginRight:50,
        width: "30%"
      }}>
        <Text style={{fontWeight: 'bold', textAlign: "center"}}>6 meses</Text> 
        <Text style={{textAlign: "center",   textDecorationLine: "line-through" }}>$2394</Text>
        <Text style={{textAlign: "center"}}>$500</Text>


      </View>

    </View>
     <View style={{ justifyContent: "center", alignItems: "center", width: "100%", marginTop:20}}>
             <Pressable style={[globalStyles.BotonAgregar]}>
               <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Comprar Ahora</Text>
              </Pressable>
    
            </View>

    </View>
  );
}
