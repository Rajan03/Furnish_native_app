import {Pressable, Text, View, StyleSheet} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {hp, wp} from "utils";

const IncDecBtn = ({selectedCount, onCountChange, styles:extraStyles}) => {

	const handleInc = () => {
		onCountChange(selectedCount + 1);
	}

	const handleDec = () => {
		if (selectedCount > 1) {
			onCountChange(selectedCount - 1);
		}
	}
	return (
		<View style={[styles.container, extraStyles]}>
			<Pressable onPress={handleInc} style={styles.plusBtn}>
				<MaterialCommunityIcons name={"plus"} size={hp(1.8)} color="black" />
			</Pressable>
			<View style={styles.count}>
				<Text style={styles.countText}>{selectedCount}</Text>
			</View>
			<Pressable onPress={handleDec} style={styles.minusBtn}>
				<MaterialCommunityIcons name={"minus"} size={hp(1.8)} color="black" />
			</Pressable>
		</View>
	);
}

export default IncDecBtn;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'space-between',

		maxWidth: wp(25),
		backgroundColor: '#eeeeee',
		borderRadius: hp(2),
		overflow: 'hidden',
	},
	plusBtn: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: hp(0.9),
		paddingHorizontal: hp(1.5),
	},
	count: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 3,
	},
	countText: {
		fontSize: hp(1.8),
		fontWeight: '600',
		color: '#525252',
	},
	minusBtn: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: hp(0.9),
		paddingHorizontal: hp(1.5),
	}
});
