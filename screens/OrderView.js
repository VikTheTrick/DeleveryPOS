import React from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ScrollView } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export function OrderView(props) {

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ height: windowHeight / 1.1, alignItems: 'center' }}>
                <ScrollView>
                    <View style={styles.container}>
                        {props.route.params.order.items.map(item =>
                            <View style={{ margin: 10 }}>
                                <Text style={styles.itemText}>{item.name} {item.price}</Text>
                                <View style={{ margin: 10 }}>
                                    {item.groups.map(group =>
                                        <View>
                                            <Text style={styles.categoryText}>{group.name}</Text>
                                            <View style={{ margin: 10 }}>
                                                {group.items.map(option =>
                                                    <View>
                                                        <Text style={styles.optionText}>{option}</Text>
                                                    </View>
                                                )}
                                            </View>
                                        </View>
                                    )}
                                </View>
                            </View>
                        )}
                    </View>
                </ScrollView>
                {props.route.params.order.status == 0 ? <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {
                        props.route.params.promeniStanjeNarudzbine(props.route.params.order.id)
                        props.route.params.navigation.navigate("Orders")
                    }}
                >
                    <Text style={styles.categoryText}>Accept</Text>
                </TouchableOpacity> : null}
                {props.route.params.order.status == 0 ? <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {
                        props.route.params.odbiNarudzbinu(props.route.params.order.id)
                        props.route.params.navigation.navigate("Orders")
                    }}
                >
                    <Text style={styles.categoryText}>Decline</Text>
                </TouchableOpacity> : null}

                {(props.route.params.order.status == 1 || props.route.params.order.status == 2) ? <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {
                        props.route.params.odbiNarudzbinu(props.route.params.order.id)
                        props.route.params.navigation.navigate("Orders")
                    }}
                >
                    <Text style={styles.categoryText}>Cancel</Text>
                </TouchableOpacity> : null}

                {props.route.params.order.status == 1 ? <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {
                        props.route.params.promeniStanjeNarudzbine(props.route.params.order.id)
                        props.route.params.navigation.navigate("Orders")
                    }}
                >
                    <Text style={styles.categoryText}>Ready</Text>
                </TouchableOpacity> : null}

                {props.route.params.order.status == 2 ? <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {
                        props.route.params.promeniStanjeNarudzbine(props.route.params.order.id)
                        props.route.params.navigation.navigate("Orders")
                    }}
                >
                    <Text style={styles.categoryText}>Finish</Text>
                </TouchableOpacity> : null}

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: windowHeight / 20
    },
    itemText: {
        fontFamily: "Raleway_400Regular",
        fontSize: windowHeight / 25,
        color: "black"
    },
    categoryText: {
        fontFamily: "Raleway_400Regular",
        fontSize: windowHeight / 35
    },
    optionText: {
        fontFamily: "Raleway_400Regular",
        fontSize: windowHeight / 45
    },
    buttonStyle: {
        width: windowWidth / 1.1,
        height: windowHeight / 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    }
})