import React from 'react';
import { useState } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import ModalContent from './ModalContent';

interface arrElement {
  title: string;
  text: string;
  isDone: boolean;
}

type ModalProps = {
  array: arrElement[];
  handleRemoveTask: (
    taskId: number,
    fullArr: arrElement[],
    setter: (arr: arrElement[]) => void
  ) => void;
  setter: (value: any) => void;
};

const AddElementModal = ({ array, handleRemoveTask, setter }: ModalProps) => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <View>
      <Pressable onPress={() => setModalOpened(!modalOpened)}>
        <Text>Add note</Text>
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
        <ModalContent setOpened={setModalOpened} opened={modalOpened} />
      </Modal>
    </View>
  );
};

export default AddElementModal;
