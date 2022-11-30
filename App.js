import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {OrderComponent} from './components/OrderComponent'
import { OrdersScreen } from './screens/OrdersScreen';
import {Stek} from './screens/Navigation';
export default function App() {
  return (
    <Stek/>
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
