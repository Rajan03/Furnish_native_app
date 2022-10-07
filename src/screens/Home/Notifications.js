import {useEffect} from "react";
import {FlatList, ScrollView} from "react-native";

import {ScrollableLayout} from "container";
import {NotificationsCardWithDate, ScreenHeader} from "components";
import {NotificationStyles as styles} from "./Home.styles";
import {hideTabBar, showTabBar} from "utils";
import {notifications} from "constants/data";

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
