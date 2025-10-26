import React from 'react';
import { FlatList, View } from "react-native";
import Card from '../../components/Card';
import { centros } from "../../data/centros";

const CentrosApoyo = () => {
    return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={centros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => ( 
          <Card
            nombre={item.nombre}
            direccion={item.direccion}
            mapa={item.mapa}
            imagen={item.imagen}
          />
        )}
      />
    </View>
  );
};

export default CentrosApoyo;
