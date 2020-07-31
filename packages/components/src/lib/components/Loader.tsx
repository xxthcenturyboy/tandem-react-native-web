import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  ActivityIndicator
} from 'react-native';
import R from 'res/R';
import { Interface } from 'readline';

interface Props {
  loading: boolean;
  title?: string;
}

const Loader = (props: Props): JSX.Element => {
  const {
    loading,
    title,
  } = props;

  const titleText = title ? title : R.strings.LOADING;

  return (
    <Modal
      visible={loading}
      transparent={true}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <Text style={styles.title}>{titleText}</Text>
          <ActivityIndicator
            size="large"
            animating={loading} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    maxHeight: 300,
    maxWidth: 300,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  }
});

export default Loader;