import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { listElementStyles } from '../style/Style';

interface arrElement {
  title: string;
  text: string;
  isDone: boolean;
  textExpanded: boolean;
}

type ListElementProps = {
  title: string;
  text: string;
  isDone: boolean;
  textExpanded: boolean;
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
  textExpanded,
  handleRemoveTask,
  id,
  array,
  setter,
}: ListElementProps) => {
  return (
    <View style={listElementStyles.container}>
      {/* <Text>{id}</Text>
      <Text>{isDone ? 'Done' : 'ToDo'}</Text> */}
      <Text style={listElementStyles.title}>{title}</Text>
      <Text style={listElementStyles.text}>{text}</Text>
      <Pressable
        style={listElementStyles.removeBtn}
        onPress={() => {
          handleRemoveTask(id, array, setter);
        }}
      >
        <Text style={listElementStyles.removeBtnText}>×</Text>
      </Pressable>
    </View>
  );
};

export default ListElement;
