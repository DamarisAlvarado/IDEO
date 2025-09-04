import { globalStyles } from '@/styles/globalStyles';
import { Image, Text, View } from 'react-native';
import { HomeButton } from "../components/HomeButton";

export default function menu() {
    return (
        <>
            <View style={[globalStyles.headContainer]}>
                <Image style={[globalStyles.logo2]}  source={require('../assets/images/logo.png')} />
                <Text style={[globalStyles.textTitle]}>Hey , Damaris</Text>
            </View>
            <View style={[globalStyles.gridContainer]}>
                <HomeButton label='Perfil' Image={'perfil'} />
                <HomeButton label='Mapa' Image={'mapa'} />
                <HomeButton label='Violencia' Image={'violencia'}/>
                <HomeButton label='Información' Image={'informacion'}/>
            </View>
        </>
    )
}

