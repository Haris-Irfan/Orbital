import React, { useState } from 'react';
import { Alert, ImageBackground, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Catalog from '@/components/catalogue';
import NavigationTab from '@/components/navigation_tab';

const backgroundImage = require('../../../assets/images/VI-SG-IT-UIbackground.png');

export default function Directory() {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.directory}>Directory</Text>
            <MaterialIcons name='qr-code-scanner' style={styles.scanner} size={24} />
        </View>
        <Catalog/>
        <NavigationTab/>    
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'darkorange', 
    shadowColor: '#006',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  directory: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  scanner: {
    color: 'black',
    shadowColor: '#006',
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
});