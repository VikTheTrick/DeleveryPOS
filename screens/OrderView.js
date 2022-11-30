import React from 'react'
import {View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ScrollView} from 'react-native'
import Button from "../components/Button";
import {theme} from "../core/theme";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function OrderView(props) {

    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <View style={{height: windowHeight / 1.1, alignItems: 'center'}}>
                <ScrollView>
                    <View style={styles.container}>
                        {props.route.params.order.items.map(item =>
                            <View style={{margin: 10}}
                                  key={Math.floor(Math.random() * 10000000000)/*quick fix*/}
                            >
                                <Text style={styles.itemText}>{item.name} {item.price}</Text>
                                <View style={{margin: 10}}>
                                    {item.groups.map(group =>
                                        <View
                                            key={Math.floor(Math.random() * 10000000000)/*quick fix*/}
                                        >
                                            <Text style={styles.categoryText}>{group.name}</Text>
                                            <View style={{margin: 10}}>
                                                {group.items.map(option =>
                                                    <View
                                                        key={Math.floor(Math.random() * 10000000000)/*quick fix*/}
                                                    >
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
                {props.route.params.order.status == 0 ? <Button
                    mode="contained"
                    theme={theme}
                    onPress={() => {
                        props.route.params.promeniStanjeNarudzbine(props.route.params.order.id)
                        props.route.params.navigation.navigate("Orders")
                    }}
                >
                    <Text style={{color: "white"}}>
                        Accept
                    </Text>
                </Button> : null}

                {props.route.params.order.status == 0 ? <Button
                    mode="contained"
                    theme={theme}
                    color={theme.colors.error}
                    onPress={() => {
                        props.route.params.odbiNarudzbinu(props.route.params.order.id)
                        props.route.params.navigation.navigate("Orders")
                    }}
                >
                    <Text style={{color: "white"}}>
                        Decline
                    </Text>
                </Button> : null}


                {props.route.params.order.status == 1 ?
                    <Button
                        mode="contained"
                        theme={theme}

                        onPress={() => {
                            props.route.params.promeniStanjeNarudzbine(props.route.params.order.id)
                            props.route.params.navigation.navigate("Orders")
                        }}>
                        <Text style={{color: "white"}}>
                            Ready
                        </Text>
                    </Button> : null}

                {props.route.params.order.status == 2 ?
                    <Button
                        mode="contained"
                        theme={theme}

                        onPress={() => {
                            props.route.params.promeniStanjeNarudzbine(props.route.params.order.id)
                            props.route.params.navigation.navigate("Orders")
                        }}>
                        <Text style={{color: "white"}}>
                            Finish
                        </Text>
                    </Button>
                    : null}


                <Button
                    mode="outlined"
                    theme={theme}
                    onPress={() => {
                        props.route.params.navigation.navigate("Orders")
                    }}>
                    Cancel
                </Button>

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
