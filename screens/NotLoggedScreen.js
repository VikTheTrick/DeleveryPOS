import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import {theme} from "../core/theme";
import {Text} from "react-native";

export default function NotLoggedScreen({navigation}) {
    return (
        <Background>
            <Logo/>
            <Header>AllFoods</Header>
            <Paragraph>
                Combining all the delivery POS into one!
            </Paragraph>
            <Button
                mode="contained"
                theme={theme}

                onPress={() => navigation.navigate('LoginScreen')}
            >
                <Text style={{color: "white"}}>
                    Login
                </Text>
            </Button>
            <Button
                buttonColor={theme.colors.primary}
                theme={theme}
                mode="outlined"
                onPress={() => navigation.navigate('RegisterScreen')}
            >
                Sign Up
            </Button>
        </Background>
    )
}
