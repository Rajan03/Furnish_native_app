import {Pressable, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {hp} from "utils";

const SectionHeader = ({title, onPress}) => (
	<View style={styles.container}>
		<Text  style={styles.header}>{title}</Text>
		<Pressable  style={styles.btn} onPress={onPress}>
			<Text  style={styles.btnTxt}>See All</Text>
			<Ionicons name="chevron-forward-outline" size={16} color="#525252"/>
		</Pressable>
	</View>)

export default SectionHeader;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "stretch",
	},
	header: {
		fontSize: hp(2.3),
		fontWeight: "700",
		color: "#525252",
	},
	btn: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	btnTxt: {
		fontSize: hp(1.8),
		color: "#525252",
		fontWeight: "600",
	}
});
