import { FC } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Todo } from './Todo';
const todoEndPoint = 'https://jsonplaceholder.typicode.com/todos';

interface WelcomeProps {
  name: string;
  age: number;
  gender: boolean; //male:true female:gender
}

const Welcome: FC<WelcomeProps> = ({ name, age, gender }) => {
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
      <FlatList<Todo>
        data={todos}
        keyExtractor={(todo: Todo) => todo.id.toString()}
        renderItem={({ item }: { item: Todo }) => (
          <View style={{ padding: 16 }}>
            <Text>
              {item.title} : {item.completed ? 'Completed' : 'Not Completed'}
            </Text>
          </View>
        )}
      />
    );
  }
  return <Text>No data</Text>;
};

export default Welcome;
