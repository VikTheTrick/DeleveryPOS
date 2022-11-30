import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { OrdersScreen } from './OrdersScreen';
import { OrderView } from './OrderView';
const Stack = createStackNavigator();


export function Stek(props){
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
    
          }}>
            <Stack.Screen name="Orders" children={({ navigation }) => <OrdersScreen navigation={navigation}></OrdersScreen>} 
            options={{
              title: "Orders",
              headerShown: false
            }} />
             <Stack.Screen name="Order" component={OrderView}
            options={{
              title: "Orders",
              headerShown: false
            }} />
            </Stack.Navigator>
          </NavigationContainer>
    )
}