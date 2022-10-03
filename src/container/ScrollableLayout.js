import {ScrollView} from "react-native";
import {KeyboardAvoidingWrapper} from "components";


const ScrollableLayout = ({withKeyboardAvoidance, style, children, ...props}) => {
    const Screen = <>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[{
            minHeight: '100%',
            backgroundColor: "#fff",
            flexDirection: 'column',
        }, style]} {...props}>
            {children}
        </ScrollView>
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

export default ScrollableLayout;
