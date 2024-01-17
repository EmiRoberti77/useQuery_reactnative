import { FC, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, ScrollView } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Todo } from './Todo';
const todoEndPoint = 'https://jsonplaceholder.typicode.com/todos';

const Welcome2 = () => {
  const [message, setMessage] = useState<string>('Welcome Component');
  const {
    data: todos,
    error,
    isError,
    isSuccess,
    isPending,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: () => axios.get<Todo[]>(todoEndPoint).then((todos) => todos.data),
  });
  if (isError) {
    return <Text>{error.message}</Text>;
  }
  if (isPending) {
    return <Text>Loading</Text>;
  }
  if (isSuccess) {
    return (
      <SafeAreaView style={{ padding: 16 }}>
        <View style={styles.header}>
          <Text style={styles.text}>Welcome to Emi app</Text>
        </View>
        <View style={styles.container}>
          <ScrollView>
            {todos.map((todo: Todo, index) => (
              <View style={styles.item} key={index}>
                <Text>{todo.title}:</Text>
                <Text>{todo.completed ? 'completed' : 'not completed'}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.header}>
            <Text style={styles.text}>Welcome to Emi app</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
};

export default Welcome2;

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: 'gray',
    height: 100,
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
