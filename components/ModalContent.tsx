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
  const [newTaskContent, setNewTaskContent] = useState<arrElement>({
    title: title,
    text: text,
    isDone: isDone,
  });

  return (
    <View>
      <Pressable onPress={() => setOpened(!opened)}>
        <Text>×</Text>
      </Pressable>
      <View>
        <TextInput
          onChangeText={setTitle}
          value={title}
          placeholder="add title"
        />
        <TextInput onChangeText={setText} value={text} placeholder="add text" />
        <Pressable onPress={() => setIsDone(!isDone)}>
          <Text>{isDone ? 'yes' : 'no'}</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => handleAddTask(newTaskContent, setter)}>
        <Text>Add</Text>
      </Pressable>
    </View>
  );
};

export default ModalConent;
