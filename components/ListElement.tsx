import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { listElementStyles } from '../style/Style';

interface arrElement {
  title: string;
  text: string;
  isDone: boolean;
}

type ListElementProps = {
  title: string;
  text: string;
  isDone: boolean;
  id: number;
  array: arrElement[];
  handleRemoveTask: (
    taskId: number,
    fullArr: arrElement[],
    setter: (arr: arrElement[]) => void
  ) => void;
  setter: (value: any) => void;
};

const ListElement = ({
  title,
  text,
  isDone,
  handleRemoveTask,
  id,
  array,
  setter,
}: ListElementProps) => {
  return (
    <View>
      <Pressable
        onPress={() => {
          handleRemoveTask(id, array, setter);
        }}
      >
        <Text>Remove</Text>
      </Pressable>
      <Text>{title}</Text>
      <Text>{id}</Text>
      <Text>{isDone ? 'Done' : 'ToDo'}</Text>
      <Text>{text}</Text>
    </View>
  );
};

export default ListElement;
