import {Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView} from "react-native";

const KeyboardAvoidingWrapper = ({children}) => {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}>
            <ScrollView>
                <Pressable onPress={Keyboard.dismiss}>
                    {children}
                </Pressable>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default KeyboardAvoidingWrapper
