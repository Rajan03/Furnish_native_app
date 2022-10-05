import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "screens";
import {SafeAreaLayout} from "container";
import {ScreenNames} from "../../constants/ScreenConstants";

const Stack = createNativeStackNavigator();
export const HomeStack = () => {

    return (
        <>
            <SafeAreaLayout>
                <Stack.Navigator initialRouteName={ScreenNames.HOME} screenOptions={{headerShown: false}}>
                    <Stack.Screen name={ScreenNames.HOME} component={HomeScreen}/>
                </Stack.Navigator>
            </SafeAreaLayout>
        </>
    )
}
