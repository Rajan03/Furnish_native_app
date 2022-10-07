import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {HomeScreen, Notifications, OffersScreen, MostPopularScreen, CategoryScreen} from "screens";
import {SafeAreaLayout} from "container";
import {ScreenNames} from "constants/ScreenConstants";

const Stack = createNativeStackNavigator();
export const HomeStack = () => {

	return (
		<>
			<SafeAreaLayout>
				<Stack.Navigator initialRouteName={ScreenNames.HOME} screenOptions={{headerShown: false}}>
					<Stack.Screen name={ScreenNames.HOME} component={HomeScreen}/>
					<Stack.Screen name={ScreenNames.NOTIFICATIONS} component={Notifications}/>
					<Stack.Screen name={ScreenNames.OFFERS} component={OffersScreen}/>
					<Stack.Screen name={ScreenNames.POPULAR} component={MostPopularScreen}/>
					<Stack.Screen name={ScreenNames.CATEGORY} component={CategoryScreen}/>
				</Stack.Navigator>
			</SafeAreaLayout>
		</>
	)
}
