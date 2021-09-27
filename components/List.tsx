import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ListElement from './ListElement';
import { listStyles } from '../style/Style';

interface arrElement {
  title: string;
  text: string;
  isDone: boolean;
  textExpanded: boolean;
}

type ListProps = {
  array: arrElement[];
  handleRemoveTask: (
    taskId: number,
    fullArr: arrElement[],
    setter: (arr: arrElement[]) => void
  ) => void;
  setter: (value: any) => void;
};

const List = ({ array, handleRemoveTask, setter }: ListProps) => {
  const content =
    array.length > 0 ? (
      array.map((el, i) => (
        <ListElement
          key={i}
          id={i}
          title={el.title}
          text={el.text}
          isDone={el.isDone}
          textExpanded={el.textExpanded}
          setter={setter}
          handleRemoveTask={handleRemoveTask}
          array={array}
        />
      ))
    ) : (
      <Text style={listStyles.placeholderText}>No notes added</Text>
    );
  return array.length > 0 ? (
    <ScrollView style={listStyles.container}>{content}</ScrollView>
  ) : (
    <View style={listStyles.placeholder}>{content}</View>
  );
};

export default List;
