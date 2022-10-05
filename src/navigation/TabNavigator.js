import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";
import {StyleSheet} from 'react-native';

import {CartStack, HomeStack} from "stacks";
import {ScreenNames, ScreenStacks} from "constants/ScreenConstants";
import {hp} from "utils";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
	const getTabBarIcon = ({color, size}, {route, navigation}) => {
		const {name} = route;
		const isFocused = navigation.isFocused();

		switch (name) {
			case ScreenStacks.HOME:
				return <MaterialCommunityIcons name={isFocused ? "home" : "home-outline"} size={size} color={color}/>
			case ScreenStacks.CART:
				return <MaterialCommunityIcons name={isFocused ? "cart" : "cart-outline"} size={size} color={color}/>
			case ScreenStacks.ORDERS:
				return <MaterialCommunityIcons name={isFocused ? "clipboard-list" : "clipboard-list-outline"} size={size}
																			 color={color}/>
			case ScreenStacks.WALLET:
				return <MaterialCommunityIcons name={isFocused ? "wallet" : "wallet-outline"} size={size} color={color}/>
			case ScreenStacks.PROFILE:
				return <FontAwesome name={isFocused ? "user" : "user-o"} size={size} color={color}/>
		}
	}

	return (
		<Tab.Navigator screenOptions={(props) => ({
			headerShown: false,
			tabBarStyle: styles.tabBar,
			tabBarIcon: (p) => getTabBarIcon(p, props),
			tabBarActiveTintColor: '#525252',
			tabBarInactiveTintColor: '#bbbbbb',
			tabBarLabelStyle: styles.tabBarLabel,
		})}>
			<Tab.Screen name={ScreenStacks.HOME} component={HomeStack} options={{tabBarLabel: ScreenNames.HOME}}/>
			<Tab.Screen name={ScreenStacks.CART} component={CartStack} options={{tabBarLabel: ScreenNames.CART}}/>
			<Tab.Screen name={ScreenStacks.ORDERS} component={CartStack} options={{tabBarLabel: ScreenNames.ORDERS}}/>
			<Tab.Screen name={ScreenStacks.WALLET} component={CartStack} options={{tabBarLabel: ScreenNames.WALLET}}/>
			<Tab.Screen name={ScreenStacks.PROFILE} component={CartStack} options={{tabBarLabel: ScreenNames.PROFILE}}/>
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: '#ffffff',
		height: 50,
		borderTopWidth: 0,
		elevation: 0,
		paddingTop: 5,
	},
	tabBarLabel: {
		fontSize: hp(1.5),
		paddingBottom: 5,
	}
})
