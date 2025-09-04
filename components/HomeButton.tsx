import { globalStyles } from '@/styles/globalStyles';
import { ImageBackground, Pressable, Text, View } from "react-native";

type ImageKey = 'perfil' | 'mapa' | 'violencia' | 'informacion';
interface Props{
    label: string;
    Image: ImageKey;
   
}

const img = {
    perfil: require('../assets/images/perfil.png'),
    mapa: require('../assets/images/mapa.jpg'),
    violencia: require('../assets/images/violencia.jpg'),
    informacion: require('../assets/images/informacion.jpg'),
}

export function HomeButton ({ label , Image} : Props) {
    return (
         <ImageBackground source={img[Image]} style={[globalStyles.container]}>

            <View style={[globalStyles.overlay]}>
                <Pressable
            style={({ pressed }) => [
              
                pressed ? { opacity: 0.7 } : { opacity: 1 },
            ]} >
                <Text style ={[globalStyles.TituloMenu]}>{label}</Text>
            </Pressable>
            </View>

         </ImageBackground>
        
            
    )
}

