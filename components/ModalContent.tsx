import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { modalContentStyles } from '../style/Style';
interface arrElement {
  title: string;
  text: string;
  isDone: boolean;
  textExpanded: boolean;
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
  const [textExpanded, setTextExpanded] = useState(false);

  const getNewNote = () => {
    return {
      title,
      text,
      isDone,
      textExpanded,
    };
  };

  return (
    <View style={modalContentStyles.modalContainer}>
      <View>
        <TextInput
          style={modalContentStyles.input}
          onChangeText={setTitle}
          value={title}
          placeholder="title"
        />
        <TextInput
          style={modalContentStyles.input}
          onChangeText={setText}
          value={text}
          placeholder="text"
        />
        <Pressable onPress={() => setIsDone(!isDone)}>
          {/* <Text>{isDone ? 'yes' : 'no'}</Text> */}
        </Pressable>
      </View>
      <Pressable
        onPress={() => {
          handleAddTask(getNewNote(), setter);
          setOpened(!opened);
        }}
      >
        <Text>Add</Text>
      </Pressable>
      <Pressable onPress={() => setOpened(!opened)}>
        <Text>×</Text>
      </Pressable>
    </View>
  );
};

export default ModalConent;
