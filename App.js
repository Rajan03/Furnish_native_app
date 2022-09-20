import {StyleSheet} from "react-native";
import {OAuthScreen, CreateAccount, SignInScreen, ForgotPasswordScreen} from "./src/screens";

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SafeAreaView from "react-native-safe-area-view";
import {SafeAreaProvider} from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={"OAuth"} screenOptions={{headerShown: false}}>
                        <Stack.Screen name="OAuth" component={OAuthScreen}/>
                        <Stack.Screen name="CreateAccount" component={CreateAccount}/>
                        <Stack.Screen name="SignIn" component={SignInScreen}/>
                        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
