import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {OrderComponent} from './components/OrderComponent'
import {OrdersScreen} from './screens/OrdersScreen';
import {Stek} from './screens/Navigation';
// https://www.npmjs.com/package/@expo-google-fonts/raleway

import {
    useFonts,
    Raleway_400Regular,
} from '@expo-google-fonts/raleway';
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
    let [fontsLoaded] = useFonts({
        Raleway_400Regular,
    });

    let fontSize = 24;
    let paddingVertical = 6;

    if (!fontsLoaded)
        return null;

    SplashScreen.hideAsync();

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

