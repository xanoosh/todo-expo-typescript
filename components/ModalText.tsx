import React from 'react';
import { useState } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import { modalContentStyles } from '../style/Style';

type ModalProps = {
  text: string;
};

const ModalText = ({ text }: ModalProps) => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <View>
      <Pressable onPress={() => setModalOpened(!modalOpened)}>
        <Text>[...]</Text>
      </Pressable>

      <Modal
        animationType="slide"
        presentationStyle="overFullScreen"
        transparent={true}
        visible={modalOpened}
        onRequestClose={() => {
          setModalOpened(!modalOpened);
        }}
      >
        <View style={modalContentStyles.modalContainer}>
          <Pressable
            style={modalContentStyles.removeBtn}
            onPress={() => setModalOpened(!modalOpened)}
          >
            <Text style={modalContentStyles.removeBtnText}>×</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default ModalText;
