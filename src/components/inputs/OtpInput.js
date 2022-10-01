import {Text, TextInput, View, StyleSheet} from "react-native";

const OtpInput = ({onOtpInput, styles: containerStyles}) => {

    return (
        <View style={[styles.inputContainer, containerStyles]}>
            <TextInput
                style={[styles.input, styles.gap]}
                maxLength={1}
                keyboardType="number-pad"
                returnKeyType="done"
                onChangeText={onOtpInput}
            />
            <TextInput
                style={[styles.input, styles.gap]}
                maxLength={1}
                keyboardType="number-pad"
                returnKeyType="done"
                onChangeText={onOtpInput}
            />
            <TextInput
                style={[styles.input, styles.gap]}
                maxLength={1}
                keyboardType="number-pad"
                returnKeyType="done"
                onChangeText={onOtpInput}
            />
            <TextInput
                style={styles.input}
                maxLength={1}
                keyboardType="number-pad"
                returnKeyType="done"
                onChangeText={onOtpInput}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        width: 50,
        height: 50,
        borderWidth: 1,
        backgroundColor: '#f1f1f1',
        borderColor: 'transparent',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    gap: {
        marginRight: 25,
    }
});

export default OtpInput
