import { globalStyles } from '@/styles/globalStyles';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

const _layout = () => {

  return (
    <View style= {globalStyles.Background}>
      <Slot/>
      <StatusBar style='light'/>
  </View>
  )
};

export default _layout