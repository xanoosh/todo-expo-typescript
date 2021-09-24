import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import List from './components/List';
import { getStorageData, updateStorageData } from './functions/MainFunctions';

export default function App() {
  interface arrElement {
    title: string;
    text: string;
    isDone: boolean;
  }
  const [toDo, setToDo] = useState<arrElement[]>([]);

  useEffect(() => {
    (async () => {
      const storedData = await getStorageData();
      if (!storedData) setToDo([]);
      if (storedData) setToDo(storedData);
    })();
  }, []);
  useEffect(() => {
    updateStorageData(toDo);
  }, [toDo]);

  return (
    <View style={styles.container}>
      <List array={toDo} />
      <Pressable
        onPress={() =>
          setToDo((prev) => [
            ...prev,
            { title: 'title', text: 'text', isDone: false },
          ])
        }
      >
        <Text>Add task</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
