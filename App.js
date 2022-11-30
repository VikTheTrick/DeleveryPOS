import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, NativeModules } from 'react-native';
import { OrderComponent } from './components/OrderComponent'
import { OrdersScreen } from './screens/OrdersScreen';
import { useEffect } from 'react';
import { Stek } from './screens/Navigation';
// https://www.npmjs.com/package/@expo-google-fonts/raleway
const { PaymentHandler, PrintService } = NativeModules;

import {
    useFonts,
    Raleway_400Regular,
} from '@expo-google-fonts/raleway';
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
    useEffect(async () => {
        //let result = JSON.parse(await PaymentHandler.sendPaymentRequest(0.01)).response.financial.result.code == "Approved";
        //if (!result) return;
        //console.log("Uspesno placanje");
    })
    let [fontsLoaded] = useFonts({
        Raleway_400Regular,
    });

    let fontSize = 24;
    let paddingVertical = 6;

    if (!fontsLoaded)
        return null;

    SplashScreen.hideAsync();

    return (
        <Stek />
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

