import {Text, View, StyleSheet, Pressable} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const CategoryCard = ({ category, onCatPress, styles: extraStyles }) => {
    return (
        <Pressable onPress={onCatPress} style={[styles.container, extraStyles]}>
            <View style={styles.icon}>
                <MaterialCommunityIcons name={category.icon} size={30} color={"#333"}/>
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
        width: 60,
        height: 60,

        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",

        backgroundColor: "#f2f2f5",
        borderRadius: 50,
    },
    title: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        textAlign: "center",
    },
});
