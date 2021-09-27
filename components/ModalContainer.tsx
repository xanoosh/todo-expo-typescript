import React from 'react';
import { useState } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import ModalContent from './ModalContent';
import { modalContainerStyles } from '../style/Style';

interface arrElement {
  title: string;
  text: string;
  isDone: boolean;
  textExpanded: boolean;
}

type ModalProps = {
  handleAddTask: (task: arrElement, setter: (prev: any) => void) => void;
  setter: (value: any) => void;
};

const AddElementModal = ({ handleAddTask, setter }: ModalProps) => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <View style={modalContainerStyles.addBtn}>
      <Pressable onPress={() => setModalOpened(!modalOpened)}>
        <Text>Add a note</Text>
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
        <ModalContent
          setOpened={setModalOpened}
          opened={modalOpened}
          handleAddTask={handleAddTask}
          setter={setter}
        />
      </Modal>
    </View>
  );
};

export default AddElementModal;
