import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * Anchors a single UI element to the bottom of the screen
 */
function moveToBottom(component: JSX.Element): JSX.Element {
  return(
    <View style={styles.container}>
      {component}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  }
});

export default moveToBottom
