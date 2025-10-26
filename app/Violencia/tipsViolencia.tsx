import { globalStyles } from '@/styles/globalStyles';
import React from 'react';
import { Image, Text, View } from 'react-native';

export default function tipsViolencia() {
    return (
        <>
        <View style={{alignItems:'center', marginTop:10}}>
            <Image style={[globalStyles.sticker]}  source={{ uri: 'https://i.postimg.cc/SQgW52gn/Logo-1.png' }} />
        </View>
        <View style={{ alignItems: 'center', justifyContent:'center' }}>
            <View style={{ width: '90%' }}>
                <Text style={[globalStyles.textTitle]}>Tips para enfrentarla</Text>
                <View style={{ padding: 10, borderRadius: 6, marginTop: 15 }}>
                    <Text style={[globalStyles.titulos]}>💡Aprende de finanzas personales: </Text>
                    <Text style={[globalStyles.parrafos]}>existen cursos gratuitos en línea, consulta la página de la CONDUSEF en la sección de Educación Financiera y prepárate.</Text>
                    <Text style={[globalStyles.titulos]}>💡Planea: </Text>
                    <Text style={[globalStyles.parrafos]}>controlar tus ingresos y gastos reducirá la ansiedad. Guarda un poco de dinero cada mes y ten un fondo de emergencia para imprevistos.</Text>
                    <Text style={[globalStyles.titulos]}>💡Cuenta bancaria propia: </Text>
                    <Text style={[globalStyles.parrafos]}> esto te permitirá gestionar tu dinero de forma segura y sin depender de otros.</Text>
                    <Text style={[globalStyles.titulos]}>💡Asesoría legal: </Text>
                    <Text style={[globalStyles.parrafos]}>si la situación involucra deudas o acuerdos legales, consulta a una abogada o abogado especializado para proteger tu independencia financiera.</Text>
                    <Text style={[globalStyles.titulos]}>💡Salud emocional: </Text>
                    <Text style={[globalStyles.parrafos]}>la violencia económica afecta tu bienestar mental, por lo que es importante buscar apoyo emocional y terapia psicológica</Text>
                    <Image style={[globalStyles.sticker]}source={{ uri: 'https://i.postimg.cc/7YhXH8h1/plan.png'}}/>
                </View>
            </View>
    </View>
    </>
    );
}