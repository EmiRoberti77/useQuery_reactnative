import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Welcome2 from './components/Welcome2';

export default function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <View style={styles.container}>
        <Welcome2 />
      </View>
    </QueryClientProvider>
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
