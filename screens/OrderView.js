import React from 'react'
import {View, Text, TouchableOpacity, Image, Dimensions, } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export function OrderView(props) {
    return(
        <View style={{flex : 1, alignItems : 'center'}}>
            <View>

            </View>
            <View style={{flexDirection:"row", height: '15%', width: '90%', marginTop: windowHeight/10, alignItems: 'center'}}>
                <Image style={{width:windowHeight/6, height:windowHeight/6, borderRadius:10}} 
                source={{uri:"https://d.newsweek.com/en/full/1125783/gettyimages-589115286.jpg"}}
                ></Image>
                <Text style={{fontFamily:"Roboto", fontSize:20, color: 'gray', marginLeft:5}}>Cheeseburger 400 rsd</Text>
            </View>
            <View style={{marginBottom:30,marginTop:10}}>
                <Text style={{fontSize:18}}>Sosevi</Text>
                <View>
                    <Text>Kecap</Text>
                    <Text>Senf</Text>
                </View>
            </View>
            
            <View>
                <Text style={{fontSize:18}}>Dodatni sirevi</Text>
                <View>
                    <Text>Ementailer</Text>
                    <Text>Chedder</Text>
                </View>
            </View>
        </View>
    )
}