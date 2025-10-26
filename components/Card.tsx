import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface CentroProps {
    nombre: string;
    direccion: string;
    imagen: string; 
    mapa: string;
}

const Card: React.FC<CentroProps> = ({ nombre, direccion, imagen, mapa }) => {
  console.log("Renderizando:", nombre, direccion, mapa);
    return (
    <View style={styles.tarjeta}>
        <Image source={{ uri: imagen }} style={styles.imagen} />
        <View style={styles.textContainer}>
            <Text style={styles.nombre}>{nombre}</Text>
            <Text style={styles.direccion}>{direccion}</Text>
            <Text style={styles.mapa}>{mapa}</Text>
        </View>
    </View>
    );
};

export default Card;

const styles = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    width:'100%',
    height:200,
    justifyContent:'center',
    alignItems:'center',
   
  },
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: "#aaa",
    resizeMode: "cover",
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,

  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  direccion: {
    fontSize: 14,
    color: "#000",
  },
  mapa: {
    fontSize: 14,
    color: "blue",
  },
});
