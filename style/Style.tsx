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
    top: '5.5%',
    left: 20,
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
    flexDirection: 'row',
    // justifyContent: '',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    width: '50%',
    justifyContent: 'center',
  },
  expandTextContainer: {
    width: '25%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
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
    top: '5.5%',
    right: 20,
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
    width: 220,
    padding: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    borderStyle: 'solid',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    lineHeight: 20,
    fontSize: 18,
  },
  addBtn: {
    position: 'absolute',
    bottom: '10%',
    width: '30%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderStyle: 'solid',
  },
  addBtnText: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  removeBtn: {
    position: 'absolute',
    top: 25,
    right: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeBtnText: {
    fontSize: 40,
    opacity: 0.6,
  },
});

export {
  mainStyles,
  listStyles,
  listElementStyles,
  modalContainerStyles,
  modalContentStyles,
};
