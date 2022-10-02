import {StyleSheet, TextInput, View} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SearchInput = ({value, onChange, placeholder}) => {
    return (
        <View style={styles.inputContainer}>
            <FontAwesome name="search" size={24} style={styles.darkIcon}/>

            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
            />

            <MaterialCommunityIcons name="swap-horizontal" size={24} style={styles.secondaryIcon}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        minHeight: 60,
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
        fontSize: 18,
        fontWeight: "400",
        color: "#d2d2d2",
    },
    secondaryIcon: {
        color: "#525252",
        paddingRight: 10,

    }
});

export default SearchInput;
