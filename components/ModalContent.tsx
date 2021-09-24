import React from 'react';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

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
  const [newTaskContent, setNewTaskContent] = useState<arrElement>({
    title: '',
    text: '',
    isDone: false,
  });
  return (
    <View>
      <Pressable onPress={() => setOpened(!opened)}>
        <Text>×</Text>
      </Pressable>
      <Text>Some content</Text>
      <Pressable onPress={() => handleAddTask(newTaskContent, setter)}>
        <Text>Add</Text>
      </Pressable>
    </View>
  );
};

export default ModalConent;
