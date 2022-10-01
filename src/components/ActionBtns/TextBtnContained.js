import {StyleSheet, Text, TouchableHighlight} from "react-native";

const ActionBtn = (props) => {
    const {btnText, onPressCallback, styles: extraStyles} = props;

    return (
        <TouchableHighlight
            activeOpacity={1}
            underlayColor="#333"
            style={[styles.btnBox, props.disabled ? styles.disabledBtnBox : null, extraStyles]}
            onPress={onPressCallback}
            {...props}>
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableHighlight>
    );
};

export default ActionBtn;

const styles = StyleSheet.create({
    // Shadowed Btn Container
    btnBox: {
        width: "100%",
        height: 50,
        backgroundColor: "#222",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    disabledBtnBox: {
        backgroundColor: "#4b4b4b",
    },
    // Btn Text
    btnText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
});
