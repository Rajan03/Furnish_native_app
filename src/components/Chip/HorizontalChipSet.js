import {StyleSheet, Pressable, ScrollView, Text, View} from "react-native";
import {hp} from "utils";

const HorizontalChipSet = ({categories, selectedCategory, onSelectionChange, withAll = true, styles: extraStyles}) => {
	return (
		<ScrollView contentContainerStyle={extraStyles} horizontal showsHorizontalScrollIndicator={false}>
			{/* 'All' Chip */}
			{withAll ? <Pressable onPress={() => onSelectionChange('all')} style={[styles.chip, selectedCategory === "all" ? styles.chipSelected : {}]} key={'all'}>
				<Text style={[styles.chipText, selectedCategory === "all" ? styles.chipTextSelected : {}]}>All</Text>
			</Pressable> : undefined}

			{/* Categories Chips */}
			{categories.map(({title}, i) => {
				return <Pressable onPress={() => onSelectionChange(title)} key={i}
													style={[styles.chip, selectedCategory === title ? styles.chipSelected : {}]}>
					<Text style={[styles.chipText, selectedCategory === title ? styles.chipTextSelected : {}]}>{title}</Text>
				</Pressable>
			})}
		</ScrollView>
	)
}

export default HorizontalChipSet;

const styles = StyleSheet.create({
	chipScroll: {},
	chip: {
		paddingVertical: hp(0.6),
		paddingHorizontal: hp(2),
		marginRight: hp(1),

		borderRadius: hp(2),
		borderColor: '#525252',
		borderWidth: 1,
	},
	chipSelected: {
		backgroundColor: '#525252',
	},
	chipText: {
		fontSize: hp(1.8),
		fontWeight: 'bold',
		color: '#525252',
	},
	chipTextSelected: {
		color: '#fff',
	}
});
