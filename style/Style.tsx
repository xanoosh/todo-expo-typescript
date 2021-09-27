// import React from 'react';
import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  resetBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '5%',
    left: '2%',
  },
  addBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '5%',
    right: '2%',
  },
});

const listStyles = StyleSheet.create({
  placeholder: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefef',
  },
  placeholderText: {
    opacity: 0.7,
  },
  container: {
    width: '100%',
    marginTop: '20%',
    backgroundColor: '#efefef',
  },
});

const listElementStyles = StyleSheet.create({});

const modalContainerStyles = StyleSheet.create({});

const modalContentStyles = StyleSheet.create({});

export {
  mainStyles,
  listStyles,
  listElementStyles,
  modalContainerStyles,
  modalContentStyles,
};
