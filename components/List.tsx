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
  const elements = array.map((el, i) => {
    <ListElement
      key={i}
      id={i}
      title={el.title}
      text={el.text}
      isDone={el.isDone}
    />;
  });
  return (
    <View>
      <Text>List:</Text>
      {elements}
    </View>
  );
};

export default List;
