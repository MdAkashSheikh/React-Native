import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegisterForm from './src/components/RegistrationField';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hwllo This is React Native</Text>
      <RegisterForm/>
      <StatusBar style="auto" />
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
