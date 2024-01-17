import { FC, useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
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
  const [message, setMessage] = useState<string>('hello emi');
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
      <SafeAreaView>
        <View>
          <Text>E M I L I A N O</Text>
          <Text>{message}</Text>
          <Button
            color={'blue'}
            title="press me"
            disabled={false}
            onPress={() => {
              Alert.alert(message);
            }}
          />
          <TextInput
            editable
            onChangeText={(text) => setMessage(text)}
            value={message}
            style={{ padding: 16 }}
          />
          <View style={{ flex: 1 }}>
            <Text>E M I L I A N O</Text>
            <Button
              color={'blue'}
              title="press me"
              disabled={false}
              onPress={() => {
                Alert.alert(message);
              }}
            />
          </View>
          <FlatList<Todo>
            data={todos}
            keyExtractor={(todo: Todo) => todo.id.toString()}
            renderItem={({ item }: { item: Todo }) => (
              <View style={{ padding: 16 }}>
                <Text>
                  {item.title} :{' '}
                  {item.completed ? 'Completed' : 'Not Completed'}
                </Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
};

export default Welcome;
