import React from 'react';
import {useState} from "react";
import {useFonts} from 'expo-font';

import {View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView, SafeAreaView, Dimensions,} from 'react-native'
import OrderComponent from '../components/OrderComponent';

const orders = [
    {
        companyLogo: "https://i.pinimg.com/originals/a8/71/4c/a8714cadb2358c6a32ce232025eb13fe.png",
        price: 1900,
        delevery: true,
        status: 0
    },
    {
        companyLogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdiscovery-cdn.wolt.com%2Fcities%2Fberlin%2Fsections%2F88ec475e-c5a6-11ea-a7b9-4a5b4d06897b_wolt_logo_article.jpeg&f=1&nofb=1&ipt=a5f0d1866e7f06d5a2a10f7621cb86cb2fe3eeeb57cc0ca76f59675ea2c6cd78&ipo=images",
        price: 1900,
        delevery: true,
        status: 0

    }, {
        companyLogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdiscovery-cdn.wolt.com%2Fcities%2Fberlin%2Fsections%2F88ec475e-c5a6-11ea-a7b9-4a5b4d06897b_wolt_logo_article.jpeg&f=1&nofb=1&ipt=a5f0d1866e7f06d5a2a10f7621cb86cb2fe3eeeb57cc0ca76f59675ea2c6cd78&ipo=images",
        price: 1900,
        delevery: true,
        status: 0

    }, {
        companyLogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdiscovery-cdn.wolt.com%2Fcities%2Fberlin%2Fsections%2F88ec475e-c5a6-11ea-a7b9-4a5b4d06897b_wolt_logo_article.jpeg&f=1&nofb=1&ipt=a5f0d1866e7f06d5a2a10f7621cb86cb2fe3eeeb57cc0ca76f59675ea2c6cd78&ipo=images",
        price: 1900,
        delevery: true,
        status: 1

    }, {
        companyLogo: "https://i.pinimg.com/originals/a8/71/4c/a8714cadb2358c6a32ce232025eb13fe.png",
        price: 1900,
        delevery: true,
        status: 0

    },
    , {
        companyLogo: "https://i.pinimg.com/originals/a8/71/4c/a8714cadb2358c6a32ce232025eb13fe.png",
        price: 1900,
        delevery: true,
        status: 1

    }, {
        companyLogo: "https://i.pinimg.com/originals/a8/71/4c/a8714cadb2358c6a32ce232025eb13fe.png",
        price: 1900,
        delevery: true,
        status: 2

    }, {
        companyLogo: "https://i.pinimg.com/originals/a8/71/4c/a8714cadb2358c6a32ce232025eb13fe.png",
        price: 1900,
        delevery: true,
        status: 0

    }, {
        companyLogo: "https://i.pinimg.com/originals/a8/71/4c/a8714cadb2358c6a32ce232025eb13fe.png",
        price: 1900,
        delevery: true,
        status: 0

    }, {
        companyLogo: "https://i.pinimg.com/originals/a8/71/4c/a8714cadb2358c6a32ce232025eb13fe.png",
        price: 1900,
        delevery: true,
        status: 0

    }, {
        companyLogo: "https://i.pinimg.com/originals/a8/71/4c/a8714cadb2358c6a32ce232025eb13fe.png",
        price: 1900,
        delevery: true,
        status: 0

    }, {
        companyLogo: "https://i.pinimg.com/originals/a8/71/4c/a8714cadb2358c6a32ce232025eb13fe.png",
        price: 1900,
        delevery: true,
        status: 0

    },


]

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
                    fontFamily: "Raleway",
                    width: '100%',
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
                    {orders.filter((order) => order.status == 2).map(item => <OrderComponent delevery={item.delevery}
                                                                                             price={item.price}
                                                                                             companyLogo={item.companyLogo}></OrderComponent>)}
                </ScrollView>
            </View>
            <TouchableOpacity
                onPress={() => {
                    setPrihvacene(!prihvacene)
                }}
                style={{
                    fontFamily: "Raleway",
                    width: '100%',
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
                    {orders.filter((order) => order.status == 1).map(item => <OrderComponent delevery={item.delevery}
                                                                                             price={item.price}
                                                                                             companyLogo={item.companyLogo}></OrderComponent>)}
                </ScrollView>
            </View>
            <TouchableOpacity
                onPress={() => {
                    setNove(!nove)
                }}
                style={{
                    width: '100%',
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
                            navigation={props.navigation} delevery={item.delevery} price={item.price}
                            companyLogo={item.companyLogo}>
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


