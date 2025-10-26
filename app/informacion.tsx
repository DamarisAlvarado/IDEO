import { globalStyles } from "@/styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <TouchableOpacity style={globalStyles.backButton}onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.appName}>PulsarSeguro</Text>
        <Image
          source={require("../assets/images/logo.png")} 
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Información básica</Text>
        <Text style={{color:'white'}}>Versión: v1.0.0</Text>
        <Text style={{color:'white'}}>Fecha de lanzamiento: 25/10/2025</Text>
      </View>


      <View style={styles.card}>
        <Text style={styles.cardTitle}>Desarrolladores</Text>

    
        <View style={styles.developer}>
          <Image
            source={require("../assets/images/avatar2.png")}
            style={styles.avatar}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold" , color:'white' }}>Damaris Alvarado</Text>
            <Text style={{color:'white'}}>Frontend / Backend</Text>
            <Text style={{color:'white'}}>damarisarciga1520@gmail.com</Text>
          </View>
        </View>

          <View style={styles.developer}>
          <Image
            source={require("../assets/images/avatar2.png")}
            style={styles.avatar}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold" , color:'white' }}>Emiliano Valero</Text>
            <Text style={{color:'white'}}>Frontend /Backend</Text>
            <Text style={{color:'white'}}>emilianovaleroa@gmail.com</Text>
          </View>
        </View>

          <View style={styles.developer}>
          <Image
            source={require("../assets/images/avatar2.png")}
            style={styles.avatar}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold" , color:'white' }}>Isel Rebolledo</Text>
            <Text style={{color:'white'}}>Frontend / Backend</Text>
            <Text style={{color:'white'}}>isel.rebolledo@gmail.com</Text>
          </View>
        </View>

          <View style={styles.developer}>
          <Image
            source={require("../assets/images/avatar2.png")}
            style={styles.avatar}
          />
          <View style={{ marginLeft: 10}}>
            <Text style={{ fontWeight: "bold" , color:'white' }}>Christian Ortiz</Text>
            <Text style={{color:'white'}}>Frontend / Backend</Text>
            <Text style={{color:'white'}}>snowiiacr@gmail.com</Text>
          </View>
        </View>

   
      
 
      </View>

      {/* Contacto / Soporte */}
      <View style={[styles.card ,{ marginBottom: 50 }]}>
        <Text style={styles.cardTitle}>Contacto / Soporte</Text>
        <Text style={{color:'white'}}>Email: soporte@midominio.com</Text>
        <Text style={{color:'white'}} >Teléfono: +52 55 1234 5678</Text>
        <Text style={{color:'white'}} >Redes sociales: Facebook / Instagram / LinkedIn</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    width:'100%',
    padding:30,
    backgroundColor: "#061a1c",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  appName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#28c8d3",
    margin:20,
  },
  card: {
    backgroundColor: "#1c2d30",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#28c8d3",
    marginBottom: 10,
  },
  developer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

});
