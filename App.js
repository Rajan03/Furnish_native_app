import {NavigationContainer} from "@react-navigation/native";

import {AuthProvider} from "./src/hooks/useAuth";
import AppNavigation from "./src/navigation";

export default function App() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <AppNavigation />
            </AuthProvider>
        </NavigationContainer>
    );
}
