import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { modalContentStyles } from '../style/Style';
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

const ModalConent = ({
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

  return (
    <View style={modalContentStyles.modalContainer}>
      <View>
        <TextInput
          style={modalContentStyles.inputTitle}
          onChangeText={setTitle}
          value={title}
          placeholder="title"
        />
        <TextInput
          multiline
          numberOfLines={7}
          style={modalContentStyles.inputText}
          onChangeText={setText}
          value={text}
          placeholder="text"
        />
        <Pressable onPress={() => setIsDone(!isDone)}>
          {/* <Text>{isDone ? 'yes' : 'no'}</Text> */}
        </Pressable>
      </View>
      <Pressable
        style={modalContentStyles.addBtn}
        onPress={() => {
          handleAddTask(getNewNote(), setter);
          setOpened(!opened);
        }}
      >
        <Text style={modalContentStyles.addBtnText}>Add</Text>
      </Pressable>
      <Pressable
        style={modalContentStyles.removeBtn}
        onPress={() => setOpened(!opened)}
      >
        <Text style={modalContentStyles.removeBtnText}>×</Text>
      </Pressable>
    </View>
  );
};

export default ModalConent;
