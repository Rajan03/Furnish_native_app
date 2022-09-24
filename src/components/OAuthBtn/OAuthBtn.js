import {StyleSheet, Text, TouchableHighlight, View} from "react-native";

const OAuthBtn = ({btnText, btnIcon, onPressCallback, onlyIcons, styles: extraStyles}) => {
    return (
        <>
            {/* OAuth Btn with Icon */}
            <TouchableHighlight
                activeOpacity={1}
                underlayColor="#f1f1f1"
                style={[styles.btnContainer, extraStyles]}
                onPress={onPressCallback}
            >
                <>
                    <View style={styles.btnIcon}>{btnIcon}</View>
                    {!onlyIcons ? <Text style={styles.btnText}>{btnText}</Text> : undefined}
                </>
            </TouchableHighlight>
        </>
    );
};

export default OAuthBtn;

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        height:50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "lightgray",
    },
    btnIcon: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "grey",
    },
});
