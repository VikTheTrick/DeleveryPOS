import React from 'react';
import { useState, useEffect } from "react";
import { Alert, NativeModules } from 'react-native';
const { PrintService, PaymentHandler } = NativeModules;

import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView, SafeAreaView, Dimensions, } from 'react-native'
import OrderComponent from '../components/OrderComponent';
import orderSlip from '../util/Slip';

import orders from "../mock/orders";
import orderPrice from '../util/Price';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export function OrdersScreen(props) {
    const [nove, setNove] = useState(true)
    const [prihvacene, setPrihvacene] = useState(false)
    const [gotove, setGotove] = useState(false)
    const [narudzbine, setNarudzbine] = useState([])
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        setNarudzbine(orders)
    });
    const promeniStanjeNarudzbine = async (id) => {
        console.log(id)
        let pomNarudzbine = narudzbine
        console.log(pomNarudzbine.length)
        for (let i = 0; i < narudzbine.length; i++) {
            if (narudzbine[i].id == id) {
                if (narudzbine[i].status == 0) {
                    let slip = orderSlip(narudzbine[i]);
                    let result = await PrintService.print(slip);
                    if (!result) return;
                }
                if (narudzbine[i].status == 2) {
                    Alert.alert("Payment", "Initiate a credit card payment?", [
                        {
                            text: 'Yes', onPress: async () => {
                                try {
                                    let result = JSON.parse(await PaymentHandler.sendPaymentRequest(orderPrice(narudzbine[i]))).response.financial.result.code == "Approved";
                                    if (!result) return Alert.alert("Error", "Payment failed");
                                    Alert.alert("Payment successful", "Print receipt?", [{
                                        text: 'Yes',
                                        onPress: async () => {
                                            let slip = orderSlip(narudzbine[i]);
                                            await PrintService.print(slip);
                                            pomNarudzbine[i].status = narudzbine[i].status + 1;
                                            setNarudzbine(pomNarudzbine)
                                            setUpdate(!update)
                                        }
                                    }, {
                                        text: 'No',
                                        style: 'cancel',
                                        onPress: () => {
                                            pomNarudzbine[i].status = narudzbine[i].status + 1;
                                            setNarudzbine(pomNarudzbine)
                                            setUpdate(!update)
                                        }
                                    }])
                                }
                                catch (e) {
                                    console.log(e);
                                }

                            }
                        },
                        {
                            text: 'No',
                            style: 'cancel',
                            onPress: () => {
                                pomNarudzbine[i].status = narudzbine[i].status + 1;
                                setNarudzbine(pomNarudzbine)
                                setUpdate(!update)
                            }
                        },
                    ])
                }
                else {
                    pomNarudzbine[i].status = narudzbine[i].status + 1;
                    setNarudzbine(pomNarudzbine)
                    setUpdate(!update)
                }
                break;
            }
        }
    }

    const odbiNarudzbinu = (id) => {
        let pomNarudzbine = narudzbine
        console.log(pomNarudzbine.length)
        for (let i = 0; i < narudzbine.length; i++) {
            if (narudzbine[i].id == id) {
                if (pomNarudzbine[i].status == 0) {
                    pomNarudzbine[i].status = 5
                }
                else {
                    pomNarudzbine[i].status = 4
                }
                break;
            }
        }
        setNarudzbine(pomNarudzbine)
        setUpdate(!update)
    }

    const checkFlex = (div) => {
        if (div == "Spremne") {
            let num = 0;
            for (let i in narudzbine) {
                if (orders[i].status == 2)
                    num += 1.1;
            }

            if (gotove && !prihvacene && !nove) {
                if (num > 7)
                    num = 6.5
                return windowHeight * num / 10
            }
            if (prihvacene && nove && gotove) {
                if (num > 3)
                    num = 3
                return windowHeight * num / 10
            }
            if (!gotove)
                return 0

            if (gotove && (prihvacene || nove)) {
                if (num > 4)
                    num = 4
                return windowHeight * num / 10
            }
        } else if (div == "Prihvacene") {
            let num = 0;
            for (let i in narudzbine) {
                if (narudzbine[i].status == 1)
                    num += 1.1;
            }

            if (prihvacene && !gotove && !nove) {
                if (num > 7)
                    num = 6.5
                return windowHeight * num / 10
            }
            if (prihvacene && nove && gotove) {
                if (num > 3)
                    num = 3
                return windowHeight * num / 10
            }
            if (!prihvacene)
                return 0

            if (prihvacene && (gotove || nove)) {
                if (num > 4)
                    num = 4
                return windowHeight * num / 10
            }
        } else if (div == "Nove") {
            let num = 0;
            for (let i in narudzbine) {
                if (narudzbine[i].status == 0)
                    num += 1.1;
            }

            if (nove && !prihvacene && !gotove) {
                if (num > 8)
                    num = 6.5
                return windowHeight * num / 10
            }
            if (prihvacene && nove && gotove) {
                if (num > 6)
                    num = 4
                return windowHeight * num / 10
            }
            if (!nove)
                return 0

            if (nove && (prihvacene || gotove)) {
                if (num > 5)
                    num = 4;
                return windowHeight * num / 10
            }
        }


    }
    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => {
                    setGotove(!gotove)
                }}
                style={{
                    fontFamily: "Raleway_400Regular",
                    height: '7%',
                    backgroundColor: gotove ? '#252525' : "gray",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 5,
                    width: '95%',
                    borderRadius: 10
                }}>
                <Text
                    style={styles.buttonText}
                >Ready for pickup</Text>
            </TouchableOpacity>
            <View style={{ height: checkFlex("Spremne") }}>
                <ScrollView>
                    {narudzbine.filter((order) => order.status == 2).map(item =>
                        <OrderComponent delevery={item.delevery}
                            odbiNarudzbinu={odbiNarudzbinu}
                            promeniStanjeNarudzbine={promeniStanjeNarudzbine}
                            key={Math.floor(Math.random() * 10000000000)/*quick fix*/}
                            price={item.price}
                            companyLogo={item.companyLogo}
                            navigation={props.navigation}
                            order={item}
                        >

                        </OrderComponent>)}
                </ScrollView>
            </View>
            <TouchableOpacity
                onPress={() => {
                    setPrihvacene(!prihvacene)
                }}
                style={{
                    fontFamily: "Raleway_400Regular",
                    height: '7%',
                    backgroundColor: prihvacene ? '#252525' : "gray",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 5,
                    width: '95%',
                    borderRadius: 10
                }}>
                <Text
                    style={styles.buttonText}
                >Accepted</Text>
            </TouchableOpacity>
            <View style={{ height: checkFlex("Prihvacene") }}>
                <ScrollView>
                    {narudzbine.filter((order) => order.status == 1).map(item =>
                        <OrderComponent
                            odbiNarudzbinu={odbiNarudzbinu}
                            promeniStanjeNarudzbine={promeniStanjeNarudzbine}
                            key={Math.floor(Math.random() * 10000000000)/*quick fix*/}
                            delevery={item.delevery}
                            price={item.price}
                            companyLogo={item.companyLogo}
                            navigation={props.navigation}
                            order={item}
                        >

                        </OrderComponent>)}
                </ScrollView>
            </View>
            <TouchableOpacity
                onPress={() => {
                    setNove(!nove)
                }}
                style={{
                    height: '7%',
                    backgroundColor: nove ? '#252525' : "gray",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 5,
                    width: '95%',
                    borderRadius: 10
                }}>
                <Text style={styles.buttonText}>New orders</Text>
            </TouchableOpacity>
            <View style={{ height: checkFlex("Nove") }}>
                <ScrollView>
                    {narudzbine.filter((order) => order.status == 0).map(item =>
                        <OrderComponent
                            odbiNarudzbinu={odbiNarudzbinu}
                            promeniStanjeNarudzbine={promeniStanjeNarudzbine}
                            key={Math.floor(Math.random() * 10000000000)/*quick fix*/}
                            navigation={props.navigation} delevery={item.delevery} price={item.price}
                            companyLogo={item.companyLogo}
                            order={item}
                        >
                        </OrderComponent>)}
                </ScrollView>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    search: {
        height: '20%',
        width: '100%', backgroundColor: 'white',
        marginBottom: 10
    },
    buttonText: {
        color: "white",
        fontFamily: "Raleway_400Regular",
        fontSize: windowHeight / 40
    }
})


