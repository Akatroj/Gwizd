import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import {CRACOW} from './MapUtils';
import Popup from './Popup';

export const Map: FC = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={CRACOW.REGION}
        showsUserLocation={true}>
        <Marker coordinate={CRACOW.COORDINATES}>
          <Callout>
            <Popup />
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map;
