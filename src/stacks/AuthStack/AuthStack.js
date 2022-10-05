import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {CreateAccount, ForgotPasswordScreen, OAuthScreen, OtpVerification, SignInScreen} from "screens";
import {ScreenNames} from "constants/ScreenConstants";

const Stack = createNativeStackNavigator();
export const AuthStack = () => {

    return (
        <>
            <Stack.Navigator initialRouteName={ScreenNames.OAuth} screenOptions={{headerShown: false}}>
                <Stack.Screen name={ScreenNames.OAuth} component={OAuthScreen}/>
                <Stack.Screen name={ScreenNames.CreateAccount} component={CreateAccount}/>
                <Stack.Screen name={ScreenNames.SignIn} component={SignInScreen}/>
                <Stack.Screen name={ScreenNames.ForgotPassword} component={ForgotPasswordScreen}/>
                <Stack.Screen name={ScreenNames.OtpScreen} component={OtpVerification}/>
            </Stack.Navigator>
        </>
    )
}
