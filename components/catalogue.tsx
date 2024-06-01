import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const places = [
  { id: 1, name: 'Place 1', description: 'Description 1' },
  { id: 2, name: 'Place 2', description: 'Description 2' },
  { id: 3, name: 'Place 3', description: 'Description 3' },
  { id: 4, name: 'Place 4', description: 'Description 4' },
  { id: 5, name: 'Place 5', description: 'Description 5' },
  { id: 6, name: 'Place 6', description: 'Description 6' },
  { id: 7, name: 'Place 7', description: 'Description 7' },
  { id: 8, name: 'Place 8', description: 'Description 8' },
  { id: 9, name: 'Place 9', description: 'Description 9' },
  { id: 10, name: 'Place 10', description: 'Description 10' },
];

export default function Catalog() {
  return (
    <ScrollView contentContainerStyle={styles.catalogContainer}>
      {places.map(place => (
        <View key={place.id} style={styles.placeCard}>
          <FontAwesome6 name='landmark-dome' style={styles.placeImage} size={40}/>
          <View style={styles.placeInfo}>
            <Text style={styles.placeName}>{place.name}</Text>
            <Text style={styles.placeDescription}>{place.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    catalogContainer: {
        padding: 10,
      },
      placeCard: {
        flexDirection: 'row',
        marginBottom: 10,
        padding: 0,
        backgroundColor: 'paleturquoise',
        borderRadius: 5,
        shadowColor: '#006',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        width: 400,
        height: 75, 
      },
      placeImage: {
        borderRadius: 5,
        marginRight: 20,
        marginLeft: 10,
        marginTop: 15,
      },
      placeInfo: {
        flex: 1,
        justifyContent: 'center',
      },
      placeName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      placeDescription: {
        fontSize: 12,
        color: 'gray',
      },
});
