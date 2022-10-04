import {Text, View, StyleSheet, Pressable} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {hp, IS_SMALL_DEVICE} from "utils";

const CategoryCard = ({ category, onCatPress, styles: extraStyles }) => {
    const iconSize = !IS_SMALL_DEVICE ? hp(3) : hp(4.5);

    return (
        <Pressable onPress={onCatPress} style={[styles.container, extraStyles]}>
            <View style={styles.icon}>
                <MaterialCommunityIcons name={category.icon} size={iconSize} color={"#333"}/>
            </View>
            <Text style={styles.title}>{category.title}</Text>
        </Pressable>
    );
}

export default CategoryCard;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
    },
    icon: {
        width: !IS_SMALL_DEVICE ? 60 : 50,
        height: !IS_SMALL_DEVICE ? 60 : 50,

        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",

        backgroundColor: "#f2f2f5",
        borderRadius: 50,
    },
    title: {
        marginTop: hp(0.8),
        fontSize: hp(1.7),
        fontWeight: "600",
        color: "#333",
        textAlign: "center",
    },
});
