import {Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView} from "react-native";

const KeyboardAvoidingWrapper = ({children}) => {

    const commonProps = {flex: 1, flexDirection: "column"}
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={commonProps}>
            <ScrollView contentContainerStyle={commonProps}>
                <Pressable style={commonProps} onPress={Keyboard.dismiss}>
                    {children}
                </Pressable>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default KeyboardAvoidingWrapper
