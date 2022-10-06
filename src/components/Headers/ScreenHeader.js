import {Pressable, StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {hp, wp} from "utils";

const ScreenHeader = ({screenName, onBackPress}) => {

	return (
		<>
			<View style={styles.header}>
				<Pressable onPress={onBackPress}>
					<Ionicons name="arrow-back-outline" size={hp(3.5)} color="#525252"/>
				</Pressable>
				<Text style={styles.headerText}>{screenName}</Text>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	header: {
		height: hp(10),
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		padding: 10,
	},
	headerText: {
		color: "#525252",
		fontSize: hp(2.8),
		fontWeight: "700",
		marginLeft: wp(4),
	}
});

export default ScreenHeader;
