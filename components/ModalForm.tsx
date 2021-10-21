import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Pressable, TextInput, Alert } from 'react-native';
import { modalContentStyles, modalFormStyles } from '../style/Style';
import { haikuValidator } from '../functions/HaikuFunctions';
interface arrElement {
  title: string;
  text: string;
  isDone: boolean;
}

type ModalContentProps = {
  setOpened: (opened: boolean) => void;
  opened: boolean;
  handleAddTask: (task: arrElement, setter: (prev: any) => void) => void;
  setter: (value: any) => void;
};

const ModalForm = ({
  setOpened,
  opened,
  handleAddTask,
  setter,
}: ModalContentProps) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [isDone, setIsDone] = useState(false);

  const getNewNote = () => {
    return {
      title,
      text,
      isDone,
    };
  };

  const handleNoteCreation = () => {
    if (haikuValidator(text)) {
      handleAddTask(getNewNote(), setter);
      setOpened(!opened);
    } else {
      Alert.alert('Haiku error', 'Write in 5-7-5 syllable pattern');
    }
  };

  return (
    <View style={modalContentStyles.modalContainer}>
      <View>
        <TextInput
          style={modalFormStyles.inputTitle}
          onChangeText={setTitle}
          value={title}
          placeholder="title"
        />
        <View style={modalFormStyles.textInputContainer}>
          <TextInput
            multiline={true}
            onChangeText={setText}
            value={text}
            placeholder="text"
          />
        </View>

        <Pressable onPress={() => setIsDone(!isDone)}>
          {/* <Text>{isDone ? 'yes' : 'no'}</Text> */}
        </Pressable>
      </View>
      <Pressable
        style={modalFormStyles.addBtn}
        onPress={() => handleNoteCreation()}
      >
        <Text style={modalFormStyles.addBtnText}>Add</Text>
      </Pressable>
      <Pressable
        style={modalFormStyles.closeBtn}
        onPress={() => setOpened(!opened)}
      >
        <Text style={modalFormStyles.closeBtnText}>×</Text>
      </Pressable>
    </View>
  );
};

export default ModalForm;
