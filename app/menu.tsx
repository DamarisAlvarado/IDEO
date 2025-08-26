import { StyleSheet, Text, View } from 'react-native';
import { HomeButton } from "../components/HomeButton";

export default function menu() {
    return (
        <>
            <View style={styles.headContainer}>
                <Text style={{color: '#1B767E', fontSize: 40, fontWeight: 'bold'}}>Hola Damaris</Text>
            </View>
            <View style={styles.gridContainer}>
                <HomeButton label='Perfil'/>
                <HomeButton label='Mapa'/>
                <HomeButton label='Violencia'/>
                <HomeButton label='Informacion'/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 30,
        padding: 20,
    },
    headContainer:{
        gap:10,
    },
})