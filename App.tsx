import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import List from './components/List';

export default function App() {
  interface arrElement {
    title: string;
    text: string;
    isDone: boolean;
  }
  const [toDo, setToDo] = useState<arrElement[] | null>(null);

  const someArray = [
    { title: 'task1', text: 'task1 text', isDone: true },
    { title: 'task2', text: 'task2 text', isDone: false },
    { title: 'task3', text: 'task3 text', isDone: true },
  ];

  useEffect(() => setToDo(someArray), []);

  return (
    <View style={styles.container}>
      <List array={toDo} />
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
