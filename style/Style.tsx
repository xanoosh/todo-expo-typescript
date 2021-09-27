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
    padding: 5,
  },
});

const listElementStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    marginBottom: 5,
    height: 50,
    padding: 10,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  text: {},
  removeBtn: {
    position: 'absolute',
    top: 7.5,
    right: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeBtnText: {
    fontSize: 30,
    opacity: 0.6,
  },
});

const modalContainerStyles = StyleSheet.create({
  addBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '5%',
    right: '2%',
  },
});

const modalContentStyles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  input: {
    width: '100%',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    borderStyle: 'solid',
  },
  addBtn: {
    position: 'absolute',
    bottom: '10%',
    width: '30%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    borderStyle: 'solid',
  },
});

export {
  mainStyles,
  listStyles,
  listElementStyles,
  modalContainerStyles,
  modalContentStyles,
};
