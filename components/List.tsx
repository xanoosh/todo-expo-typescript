import React from 'react';
import { View, Text } from 'react-native';
import ListElement from './ListElement';

interface arrElement {
  title: string;
  text: string;
  isDone: boolean;
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
          setter={setter}
          handleRemoveTask={handleRemoveTask}
          array={array}
        />
      ))
    ) : (
      <Text>No tasks</Text>
    );
  return (
    <View>
      <Text>List:</Text>
      <View>{content}</View>
    </View>
  );
};

export default List;
