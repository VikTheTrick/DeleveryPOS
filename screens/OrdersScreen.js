import React from 'react';
import {useState} from "react";
import {useFonts} from 'expo-font';

import {View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView, SafeAreaView, Dimensions,} from 'react-native'
import OrderComponent from '../components/OrderComponent';

import orders from "../mock/orders";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export function OrdersScreen(props) {
    const [nove, setNove] = useState(true)
    const [prihvacene, setPrihvacene] = useState(false)
    const [gotove, setGotove] = useState(false)

    const checkFlex = (div) => {

        if (div == "Gotove") {
            let num = 0;
            for (let i in orders) {
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
            for (let i in orders) {
                if (orders[i].status == 1)
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
            for (let i in orders) {
                if (orders[i].status == 0)
                    num += 1.1;
            }

            if (nove && !prihvacene && !gotove) {
                if (num > 7)
                    num = 6.5
                return windowHeight * num / 10
            }
            if (prihvacene && nove && gotove) {
                if (num > 3.33)
                    num = 3
                return windowHeight * num / 10
            }
            if (!nove)
                return 0

            if (nove && (prihvacene || gotove)) {
                if (num > 4)
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
                    backgroundColor: '#f5f5f5',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 5,
                    width: '95%',
                    borderRadius: 10
                }}>
                <Text>Gotove</Text>
            </TouchableOpacity>
            <View style={{height: checkFlex("Gotove")}}>
                <ScrollView>
                    {orders.filter((order) => order.status == 2).map(item =>
                        <OrderComponent delevery={item.delevery}
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
                    backgroundColor: '#ffea00',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 5,
                    width: '95%',
                    borderRadius: 10
                }}>
                <Text>Prihvacene</Text>
            </TouchableOpacity>
            <View style={{height: checkFlex("Prihvacene")}}>
                <ScrollView>
                    {orders.filter((order) => order.status == 1).map(item =>
                        <OrderComponent key={Math.floor(Math.random() * 10000000000)/*quick fix*/}
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
                    backgroundColor: '#ACD1AF',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 5,
                    width: '95%',
                    borderRadius: 10
                }}>
                <Text>Nove</Text>
            </TouchableOpacity>
            <View style={{height: checkFlex("Nove")}}>
                <ScrollView>
                    {orders.filter((order) => order.status == 0).map(item =>
                        <OrderComponent
                            key={Math.floor(Math.random() * 10000000000)/*quick fix*/}
                            navigation={props.navigation} delevery={item.delevery} price={item.price}
                            companyLogo={item.companyLogo}
                            order={item}
                        >
                        </OrderComponent>)}
                </ScrollView>
            </View>
        </View>
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
    }
})


