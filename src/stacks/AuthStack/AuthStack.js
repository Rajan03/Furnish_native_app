import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {CreateAccount, ForgotPasswordScreen, OAuthScreen, OtpVerification, SignInScreen} from "../../screens";

const Stack = createNativeStackNavigator();
export const AuthStack = () => {

    return (
        <>
            <Stack.Navigator initialRouteName={"OAuth"} screenOptions={{headerShown: false}}>
                <Stack.Screen name="OAuth" component={OAuthScreen}/>
                <Stack.Screen name="CreateAccount" component={CreateAccount}/>
                <Stack.Screen name="SignIn" component={SignInScreen}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
                <Stack.Screen name="OtpScreen" component={OtpVerification}/>
            </Stack.Navigator>
        </>
    )
}
