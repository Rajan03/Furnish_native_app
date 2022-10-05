import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SafeAreaLayout} from "container";

const Stack = createNativeStackNavigator();
export const CartStack = () => {

    return (
        <>
            <SafeAreaLayout>
                <Stack.Navigator initialRouteName={"Cart"} screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Cart" component={CartHome}/>
                </Stack.Navigator>
            </SafeAreaLayout>
        </>
    )
}


import {View, Text} from "react-native";

const CartHome = () => {
    return (
        <>
            <View>
                <Text>Cart Screen</Text>
            </View>
        </>
    )
}
