import React from "react";
import {View, Text, Component, TouchableOpacity, StyleSheet, Image, Dimensions,} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OrderComponent = (props) => {

    return (
        <TouchableOpacity style={styles.container}
                          onPress={() => props.navigation.navigate("Order",{navigation:props.navigation,order:props.order,promeniStanjeNarudzbine:props.promeniStanjeNarudzbine, odbiNarudzbinu : props.odbiNarudzbinu})}
        >
            <Image source={{
                uri: props.companyLogo
            }}
                   style={styles.companyLogo}/>
            <View style={{flexDirection: 'row', width: '50%', justifyContent: "space-around"}}>
                <Text>#{props.order.id} </Text>
                <Text>1899 rsd</Text>
                <Text>12:34</Text>
                <Text>Za poneti</Text>
            </View>
            <View>
                <TouchableOpacity 
                onPress={() => {props.promeniStanjeNarudzbine(props.order.id)}}
                style={{backgroundColor:'white',height:'100%',justifyContent: 'center', borderRadius: 10, width:windowWidth/5, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{margin:5, fontFamily:'Raleway_400Regular'}}>{props.order.status == 0?"Prihvati i stampaj" :(props.order.status == 1 ? "Spremi" : "Zavrsi")}</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth / 1.1,
        margin:5,
        height: windowHeight / 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        shadowOpacity: 0.1,
        elevation:1,
        shadowRadius: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '2%',
        alignSelf: 'center',
        
    },

    companyLogo: {
        width: '15%',
        height: '80%',
        borderRadius: 10,
        marginLeft: 5
    }
});

export default OrderComponent;
