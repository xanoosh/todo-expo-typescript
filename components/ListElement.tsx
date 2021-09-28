import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { listElementStyles } from '../style/Style';
import ModalText from './ModalText';

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
    <View style={listElementStyles.container}>
      <Text style={listElementStyles.title}>{title}</Text>
      <View style={listElementStyles.expandTextContainer}>
        <ModalText text={text} />
      </View>
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
