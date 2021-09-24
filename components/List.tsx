import React from 'react';
import { View, Text } from 'react-native';
import ListElement from './ListElement';

interface arrayElement {
  title: string;
  text: string;
  isDone: boolean;
}
type ListProps = {
  array: arrayElement[];
};

const List = ({ array }: ListProps) => {
  const content =
    array.length > 0 ? (
      array.map((el, i) => (
        <ListElement
          key={i}
          id={i}
          title={el.title}
          text={el.text}
          isDone={el.isDone}
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
