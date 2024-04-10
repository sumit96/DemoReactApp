import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StateUpdate from './components/Stateupdate';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Sumit Puri. How </Text>
      <StatusBar style="auto" />
      <StateUpdate/>
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
