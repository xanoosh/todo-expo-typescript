import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import List from './components/List';
import { getStorageData, updateStorageData } from './functions/MainFunctions';
import { addTask, removeTask } from './functions/TaskFunctions';

import { mainStyles } from './style/Style';

export default function App() {
  interface arrElement {
    title: string;
    text: string;
    isDone: boolean;
    textExpanded: boolean;
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
    <View style={mainStyles.container}>
      <List array={toDo} handleRemoveTask={removeTask} setter={setToDo} />
      <Pressable
        onPress={() =>
          setToDo((prev) => [
            ...prev,
            { title: 'title', text: 'text', isDone: false, textExpanded: true },
          ])
        }
      >
        <Text>Add task</Text>
      </Pressable>
      <Pressable onPress={() => setToDo([])}>
        <Text>Reset</Text>
      </Pressable>
    </View>
  );
}
