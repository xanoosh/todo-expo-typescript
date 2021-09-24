import React from 'react';
import { View, Text, Pressable } from 'react-native';

type ModalContentProps = {
  setOpened: (opened: boolean) => void;
  opened: boolean;
};

const ModalConent = ({ setOpened, opened }: ModalContentProps) => {
  return (
    <View>
      <Pressable onPress={() => setOpened(!opened)}>
        <Text>×</Text>
      </Pressable>
      <Text>Some content</Text>
    </View>
  );
};

export default ModalConent;
