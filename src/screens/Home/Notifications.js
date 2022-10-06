import {useEffect} from "react";
import {FlatList, ScrollView} from "react-native";

import {ScrollableLayout} from "container";
import {NotificationsCardWithDate, ScreenHeader} from "components";
import {NotificationStyles as styles} from "./Home.styles";
import {hideTabBar, showTabBar} from "utils";

const notifications = [
	{
		id: 1,
		date: "2022-10-05 12:00:00",
		notifications: [
			{
				"id": 4,
				"icon": "external-link-square",
				"message": "Order delivered successfully",
				"description": "Your order has been delivered successfully",
				"date": "2022-10-05 12:00:00",
			}
		]
	},
	{
		id: 2,
		date: "2022-10-04 12:00:00",
		notifications: [
			{
				"id": 3,
				"icon": "external-link-square",
				"message": "Order placed successfully",
				"description": "Your order has been placed successfully",
				"date": "2022-10-02 12:00:00",
			}
		]
	},
	{
		id: 3,
		date: "2022-10-02 12:00:00",
		notifications: [
			{
				"id": 1,
				"icon": "user",
				"message": "Account created successfully",
				"date": "2022-10-01 12:00:00",
			},
			{
				"id": 2,
				"icon": "credit-card",
				"message": "Credit Card added successfully",
				"description": "Your credit card has been linked successfully",
				"date": "2022-10-01 12:00:00",
			},
			{
				"id": 3,
				"icon": "user",
				"message": "Account created successfully",
				"date": "2022-10-01 12:00:00",
			},
			{
				"id": 4,
				"icon": "credit-card",
				"message": "Credit Card added successfully",
				"description": "Your credit card has been linked successfully",
				"date": "2022-10-01 12:00:00",
			}
		]
	},
	{
		id: 4,
		date: "2022-10-01 12:00:00",
		notifications: [
			{
				"id": 1,
				"icon": "user",
				"message": "Account created successfully",
				"date": "2022-10-01 12:00:00",
			},
			{
				"id": 2,
				"icon": "credit-card",
				"message": "Credit Card added successfully",
				"description": "Your credit card has been linked successfully",
				"date": "2022-10-01 12:00:00",
			},
			{
				"id": 3,
				"icon": "user",
				"message": "Account created successfully",
				"date": "2022-10-01 12:00:00",
			},
			{
				"id": 4,
				"icon": "credit-card",
				"message": "Credit Card added successfully",
				"description": "Your credit card has been linked successfully",
				"date": "2022-10-01 12:00:00",
			}
		]
	},
]

const Notifications = ({navigation}) => {

	// Set Tab Bar visibility hidden on Load and visible on Unload
	useEffect(() => {
		hideTabBar(navigation);
		return () => showTabBar(navigation)
	}, []);

	return (
		<ScrollableLayout>
			{/* Header */}
			<ScreenHeader screenName={"Notifications"} onBackPress={() => navigation.goBack()}/>

			{/* Notifications List */}
			<ScrollView contentContainerStyle={styles.notificationContainer} horizontal>
				<FlatList data={notifications}
									renderItem={({item}) => <NotificationsCardWithDate
										notification={item} styles={styles.notificationCard}/>}/>
			</ScrollView>
		</ScrollableLayout>
	);
}

export default Notifications;
