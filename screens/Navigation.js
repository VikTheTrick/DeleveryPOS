import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {OrdersScreen} from './OrdersScreen';
import {OrderView} from './OrderView';
import RegisterScreen from "./RegisterScreen";
import LoginScreen from "./LoginScreen";
import NotLoggedScreen from "./NotLoggedScreen";
import ResetPasswordScreen from "./ResetPasswordScreen";

const Stack = createStackNavigator();


export function Stek(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"NotLoggedScreen"} screenOptions={{}}>
                <Stack.Screen name="LoginScreen" children={({navigation}) => <LoginScreen navigation={navigation}/>}
                              options={{
                                  title: "Login",
                                  headerShown: false
                              }}/>


                <Stack.Screen name="RegisterScreen"
                              children={({navigation}) => <RegisterScreen navigation={navigation}/>}
                              options={{
                                  title: "Register",
                                  headerShown: false
                              }}/>

                <Stack.Screen name="NotLoggedScreen"
                              children={({navigation}) => <NotLoggedScreen navigation={navigation}/>}
                              options={{
                                  title: "You are not logged in",
                                  headerShown: false
                              }}/>

                <Stack.Screen name="ResetPasswordScreen"
                              children={({navigation}) => <ResetPasswordScreen navigation={navigation}/>}
                              options={{
                                  title: "Reset Password",
                                  headerShown: false
                              }}/>

                <Stack.Screen name="Orders"
                              children={({navigation}) => <OrdersScreen navigation={navigation}></OrdersScreen>}
                              options={{
                                  title: "Orders",
                                  headerShown: false
                              }}/>
                <Stack.Screen name="Order" component={OrderView}
                              options={{
                                  title: "Orders",
                                  headerShown: false
                              }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
