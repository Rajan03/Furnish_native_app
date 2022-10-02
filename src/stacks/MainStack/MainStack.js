import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "../../screens";
import {SafeAreaLayout} from "../../container";

const Stack = createNativeStackNavigator();
export const MainStack = () => {

    return (
        <>
            <SafeAreaLayout>
                <Stack.Navigator initialRouteName={"Home"} screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                </Stack.Navigator>
            </SafeAreaLayout>
        </>
    )
}
