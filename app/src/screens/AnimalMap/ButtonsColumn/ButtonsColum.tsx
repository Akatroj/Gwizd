import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

export const ButtonsColumn = () => {
  return (
    <View style={styles.container}>
      <Button title="SECOS" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    margin: 12,
    width: '30%',
    height: '50%',
  },
});

export default ButtonsColumn;
