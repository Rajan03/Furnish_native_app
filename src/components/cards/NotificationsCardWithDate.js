import {Text, View, StyleSheet} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import moment from "moment";
import {hp} from "utils";

const NotificationCard = ({notification}) => {
	return (
		<View style={styles.notificationCard}>
			<View style={styles.iconBox}>
				<FontAwesome name={notification.icon} size={hp(2.5)} color="#fff"/>
			</View>
			<View style={styles.messageBox}>
				<Text style={styles.message}>{notification.message}</Text>
				<Text style={styles.description}>{notification.description}</Text>
			</View>
		</View>
	)
}

const NotificationsCardWithDate = ({notification, styles: extraContainerStyles}) => {
	const {date, notifications} = notification;
	const isToday = moment(date).isSame(moment(), 'day');
	const isYesterday = moment(date).isSame(moment().subtract(1, 'days'), 'day');

	return (
		<View style={[styles.notificationBox, extraContainerStyles]}>
			<Text style={styles.dateTxt}>
				{isToday ? "Today" : isYesterday ? "Yesterday" : moment(date).format("DD MMMM")}
			</Text>
			{notifications.map((n, i) => <NotificationCard key={i} notification={n}/>)}
		</View>
	);
}

export default NotificationsCardWithDate;

const styles = StyleSheet.create({
	notificationBox: {},
	dateTxt: {
		color: "#525252",
		fontSize: hp(2.4),
		fontWeight: "600",
	},
	notificationCard: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",

		padding: hp(1.5),
		marginTop: hp(2),
		backgroundColor: "#f2f2f5",
		borderRadius: hp(1.5),
	},
	iconBox: {
		width: hp(5),
		height: hp(5),
		borderRadius: hp(5),
		backgroundColor: "#525252",
		justifyContent: "center",
		alignItems: "center",
	},
	messageBox: {
		flex: 1,
		marginLeft: 10,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	message: {
		color: "#525252",
		fontSize: hp(2),
		fontWeight: "600",
	},
	description: {
		color: "#727272",
		fontSize: hp(1.6),
		fontWeight: "400",
		marginTop: hp(0.5),
	},
});
