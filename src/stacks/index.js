import {useAuth} from "../hooks";
import {SafeAreaLayout} from "../container";

import {AuthStack} from "./AuthStack/AuthStack";
import {MainStack} from "./MainStack/MainStack";
import {Text} from "react-native";


export default function AppStack() {
    const {user, error, loading} = useAuth();

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

    if (user) {
        return <MainStack/>
    }

    return <AuthStack/>
}

export {AuthStack};
