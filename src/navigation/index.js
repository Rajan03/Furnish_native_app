import {Text} from "react-native";

import {useAuth} from "hooks";
import {SafeAreaLayout} from "container";
import {TabNavigator} from "./TabNavigator";

const AppNavigation = () => {
    const {user, error, loading} = useAuth();

    if (!user) {
        return <AuthStack/>
    }

    //@TODO: Add loading screen
    if (loading) {
        return (
            <SafeAreaLayout>
                <Text>Loading...</Text>
            </SafeAreaLayout>
        )
    }

    //@TODO: Add error screen
    if (error) {
        return (
            <SafeAreaLayout>
                <Text>{error}</Text>
            </SafeAreaLayout>
        )
    }


    return (
        <TabNavigator/>
    )
}

export default AppNavigation;
