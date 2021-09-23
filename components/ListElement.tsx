import React from 'react';
import { View, Text } from 'react-native';

type ListElementProps = {
  title: string;
  text: string;
  isDone: boolean;
  id: number;
};

const ListElement = ({ title, text, isDone, id }: ListElementProps) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{isDone ? 'Done' : 'ToDo'}</Text>
      <Text>{text}</Text>
    </View>
  );
};

export default ListElement;
