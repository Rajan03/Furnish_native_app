import {NavigationContainer} from "@react-navigation/native";

import AppStack from "./src/stacks";
import {AuthProvider} from "./src/hooks/useAuth";

export default function App() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <AppStack/>
            </AuthProvider>
        </NavigationContainer>
    );
}
