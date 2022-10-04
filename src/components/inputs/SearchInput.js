import {StyleSheet, TextInput, View} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {hp} from "../../utils";

const SearchInput = ({value, onChange, placeholder, styles: extraStyles}) => {
    return (
        <View style={[styles.inputContainer, extraStyles]}>
            <FontAwesome name="search" size={hp(2.5)} style={styles.darkIcon}/>

            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
            />

            <MaterialCommunityIcons name="swap-horizontal" size={hp(2.5)} style={styles.secondaryIcon}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        minHeight: hp(6),
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f6f8f8",
        borderRadius: 10,
        borderColor: "transparent",
        borderWidth: 1,
    },
    darkIcon: {
        resizeMode: "contain",
        marginRight: 10,
        paddingVertical: 10,
        paddingLeft: 10,
        color: "#d2d2d2",
    },
    input: {
        flex: 1,
        alignSelf: "stretch",
        fontSize: hp(2.2),
        fontWeight: "400",
        color: "#d2d2d2",
    },
    secondaryIcon: {
        color: "#525252",
        paddingRight: 10,

    }
});

export default SearchInput;
