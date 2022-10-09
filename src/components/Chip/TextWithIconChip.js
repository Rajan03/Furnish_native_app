import {Text, View, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {hp} from "utils";


const TextWithIconChip = ({ icon, text, styles: extraStyles}) => {
	return (
		<View style={[styles.container, extraStyles]}>
			<Text style={styles.text}>{text}</Text>
			{typeof icon === "string" ? (
				<Ionicons name={icon} size={hp(1.8)} color="#525252"/>
			) : (
				icon
			)}
		</View>
	);
}

export default TextWithIconChip;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#f2f2f5',
		borderRadius: 10,
		paddingHorizontal: 8,
		paddingVertical: 4,
	},
	text: {
		marginRight: 4,
		fontSize: hp(1.8),
		fontWeight: '600',
		color: '#525252',
	},
});
