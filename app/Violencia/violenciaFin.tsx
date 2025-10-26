import { globalStyles } from '@/styles/globalStyles';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export default function ViolenciaFin() {
    return (
        <>
        <View style={{alignItems:'center', marginTop:10}}>
            <Image style={[globalStyles.sticker]}  source={{ uri: 'https://i.postimg.cc/SQgW52gn/Logo-1.png' }} />
        </View>
        <View style={{ alignItems: 'center', justifyContent:'center' }}>
            <View style={{ width: '90%' }}>
                <Text style={[globalStyles.textTitle]}>¿Qué es la Violencia Financiera?</Text>
                <View style={{ padding: 10, borderRadius: 6, marginTop: 15 }}>
                    <Text style={[globalStyles.parrafos]}>La violencia financiera ocurre cuando alguien cercano, como una pareja o familiar, toma control sobre el dinero de otra persona. Esto puede incluir limitar sus gastos, impedirle trabajar o decidir cómo se usan sus ingresos. Este tipo de control genera dependencia económica, dejando a la persona sin poder tomar decisiones por sí misma.</Text>
                    <Image style={[globalStyles.sticker]}source={{ uri: 'https://i.postimg.cc/4dsXz3tN/bankruptcy.png'}}/>
                </View>
            </View>
    <Pressable
        style={({ pressed }) => [
        globalStyles.btonlogin,
        pressed ? { opacity: 0.7 } : { opacity: 1 },
        ]}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Test</Text>
    </Pressable>
        <Pressable
        style={({ pressed }) => [
        globalStyles.btonlogin,
        pressed ? { opacity: 0.7 } : { opacity: 1 },
        ]}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Consejos para enfrentarla</Text>
    </Pressable>
    </View>
    </>
    );
}