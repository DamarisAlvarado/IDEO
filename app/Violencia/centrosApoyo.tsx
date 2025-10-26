import { globalStyles } from '@/styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Card from '../../components/Card';
import { centros } from "../../data/centros";

const CentrosApoyo = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity style={globalStyles.backButton}onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <Text style={{ fontWeight: "bold", marginTop:60 , fontSize:35}}> Centros de atención  </Text>
      <ScrollView style={{marginTop:50 , marginBottom:80}}>
        {centros.map((item) => (
          <Card
            key={item.id}
            nombre={item.nombre}
            direccion={item.direccion}
            mapa={item.mapa}
            imagen={item.imagen}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CentrosApoyo;
