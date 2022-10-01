import {SafeAreaProvider} from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";
import {ScrollView} from "react-native";

import {ScrollContainer} from "./Auth.styles";
import {KeyboardAvoidingWrapper} from "../../components";

const AuthLayout = ({withKeyboardAvoidance, children}) => {
    const Screen = <>
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
                <ScrollView contentContainerStyle={ScrollContainer}>
                    {children}
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    </>

    if (withKeyboardAvoidance) {
        return (
            <KeyboardAvoidingWrapper>
                {Screen}
            </KeyboardAvoidingWrapper>
        )
    }

    return Screen;
}

export default AuthLayout;
