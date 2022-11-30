import React from "react";
import {View, Text, Component, TouchableOpacity, StyleSheet, Image, Dimensions,} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function OrderComponent(props){

    return (
        <TouchableOpacity style={styles.container}
        onPress={()=>props.navigation.navigate("Order") }
        >
            <Image source={{
                uri:props.companyLogo}} 
                style={styles.companyLogo}/>
            <View style={{flexDirection:'row',width:'50%', justifyContent:"space-around"}}>
                <Text>1899 rsd</Text>
                <Text>12:34</Text>
                <Text>Za poneti</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width:windowWidth/1.1,
        height:windowHeight/10,
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        shadowOpacity:0.1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:'2%',
        alignSelf:'center'
    },

    companyLogo:{
        width:'15%',
        height:'80%',
        borderRadius:10,
        marginLeft:5
    }
})