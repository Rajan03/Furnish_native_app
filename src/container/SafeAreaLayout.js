import {StyleSheet} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import {SafeAreaProvider} from "react-native-safe-area-context";

export const SafeAreaLayout = ({ children, style, insets = {top: "always"} }) => {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[styles.container, style]} forceInset={insets}>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
