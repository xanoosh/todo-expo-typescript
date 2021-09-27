import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { getStorageData, updateStorageData } from './functions/MainFunctions';
import { addTask, removeTask } from './functions/TaskFunctions';

import List from './components/List';
import ModalContainer from './components/ModalContainer';

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
      <Pressable style={mainStyles.resetBtn} onPress={() => setToDo([])}>
        <Text>Reset</Text>
      </Pressable>
      <ModalContainer handleAddTask={addTask} setter={setToDo} />
      <List array={toDo} handleRemoveTask={removeTask} setter={setToDo} />
    </View>
  );
}
