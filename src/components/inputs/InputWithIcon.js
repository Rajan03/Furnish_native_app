import {StyleSheet, Text, TextInput, View} from "react-native";
import {FontAwesome, Ionicons} from "@expo/vector-icons";

const InputWithIcon = ({icon, error, style: extraStyle, ...props}) => {
    return (
        <View style={[styles.container, extraStyle]}>
            <View style={[styles.inputContainer, error ? styles.inputErrorContainer : null]}>
                {/* Dark icon if no error else red */}
                <FontAwesome name={icon} size={24} style={[styles.darkIcon, error ? styles.errorIcon : null]}/>

                {/* Input */}
                <TextInput style={styles.input} {...props} />

                {/* Check Icon [dark styles if no error and value exists, red if error, light grey if neutral] */}
                <Ionicons name="checkmark-done-outline" size={24} color="lightgray"
                          style={[styles.lightIcon, error ? styles.errorIcon : (props.value && props.value.length ? styles.darkIcon : null)]}/>
            </View>
            <Text style={styles.error}>{error}</Text>
        </View>
    );
}

export default InputWithIcon;
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "flex-start",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f3f0f0",
        borderRadius: 10,
        padding: 10,
        borderColor: "transparent",
        borderWidth: 1,
    },
    inputErrorContainer: {
        borderColor: "#c53838",
        borderWidth: 1,
        backgroundColor: "#faeded",
    },
    errorIcon: {
        color: '#c53838'
    },
    darkIcon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        marginRight: 10,
        color: '#222'
    },
    lightIcon: {
        color: '#d2cfcf'
    },
    input: {
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
        color: "#333",
    },
    error: {
        color: "#ea4646",
        fontSize: 11,
        fontWeight: "500",
        marginLeft: 5,
        marginTop: 1,
    }
});
