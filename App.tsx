import { StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <View style={styles.container}>
        <Welcome name="emi" age={47} gender={true} />
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
