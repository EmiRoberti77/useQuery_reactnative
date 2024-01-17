import React from 'react';
// import MapboxGL from '@rnmapbox/maps';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { StyleSheet, View } from 'react-native';
const token =
  'pk.eyJ1IjoiZW1pcm9iZXJ0aSIsImEiOiJjbHJnMjh3dWgwYTkyMmlvNWVuZnA5cGduIn0.-tB1VWlZTJAisOXDrTkglw';

MapboxGL.setAccessToken(token);

const MapBox = () => {
  return (
    <View>
      <MapboxGL.MapView style={styles.map} />
    </View>
  );
};

export default MapBox;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
