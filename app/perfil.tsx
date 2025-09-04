import ImagePerfil from '@/components/ImagePerfil'
import * as React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../styles/globalStyles';

export default function perfil() {
  return (
    <View style={[globalStyles.Backgroundperfil]}>
        <ImagePerfil/>
        <Text>Perfil</Text>
    </View>
  )
}