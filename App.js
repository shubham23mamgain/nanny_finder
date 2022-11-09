import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthStack from './src/navigation/AuthStack';
import MainStack from './src/navigation/MainStack';
import Routes from "./src/navigation/Routes";
export default function App() {
  return (
    <View style={{flex:1}}>
      {AuthStack()}
    </View>
  );
}

