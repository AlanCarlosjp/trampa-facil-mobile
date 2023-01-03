import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Routes from './src/Routes';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NativeBaseProvider>
        <StatusBar style="light" />
        <Routes />
      </NativeBaseProvider>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});