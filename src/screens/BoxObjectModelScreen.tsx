import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View>
        <Text style={styles.title}>
            Box Object Model
        </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    backgroundColor:'red',
  },
});