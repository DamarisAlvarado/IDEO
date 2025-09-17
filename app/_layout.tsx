import { globalStyles } from '@/styles/globalStyles';
import { Slot } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const _layout = () => {

  return (
    <View style= {globalStyles.Background}>
      <Slot />
  </View>
  )
};

export default _layout