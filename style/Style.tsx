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
    padding: 10,
    paddingRight: 40,
    overflow: 'hidden',
    flexDirection: 'row',
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
    top: 5,
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
const modalFormStyles = StyleSheet.create({
  inputTitle: {
    width: 220,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#bbb',
    borderStyle: 'solid',
    borderRadius: 4,
    // textAlign: 'center',
  },
  textInputContainer: {
    width: 220,
    height: 180,
    padding: 10,
    borderWidth: 1,
    borderColor: '#bbb',
    borderStyle: 'solid',
    borderRadius: 4,
    marginBottom: 20,
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
  closeBtn: {
    position: 'absolute',
    top: 25,
    right: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtnText: {
    fontSize: 30,
    opacity: 0.6,
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
  text: {
    padding: 15,
    textAlign: 'left',
    lineHeight: 38,
    fontSize: 22,
  },
  closeBtnContainer: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  closeBtn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtnText: {
    fontSize: 50,
    opacity: 0.6,
  },
});

export {
  mainStyles,
  listStyles,
  listElementStyles,
  modalContainerStyles,
  modalContentStyles,
  modalFormStyles,
};
