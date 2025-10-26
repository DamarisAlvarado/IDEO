import { globalStyles } from '@/styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';

export default function violentrometro() {
    return (
        <View style={{height:'100%', width:'100%', padding:10}}>
          <TouchableOpacity style={globalStyles.backButton}onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
              <ScrollView>
                <Image  source={require('../../assets/images/violentometrov.png')} />
              </ScrollView>
        </View>
    );
}