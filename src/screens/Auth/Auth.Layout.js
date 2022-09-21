import {AuthLayoutStyles as styles} from "./Auth.styles";
import {SafeAreaProvider} from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";

const AuthLayout = ({children}) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default AuthLayout;
