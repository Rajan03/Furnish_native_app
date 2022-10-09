import {Text, View, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {hp} from "utils";

const RatingIconText = ({rating, reviewsCount, styles: extraStyles}) => {
	return (
		<View style={[styles.ratingContainer, extraStyles]}>
			<Ionicons name={rating % 1 === 0 ? "star" : "star-half"} size={hp(1.8)} color="#525252"/>
			<Text style={styles.rating}>
				{rating}
			</Text>
			<Text style={styles.reviewsCount}>
				{reviewsCount ? "("+ reviewsCount + " reviews)" : ""}
			</Text>
		</View>
	);
}

export default RatingIconText;

const styles = StyleSheet.create({
	ratingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	rating: {
		marginLeft: 4,
		fontSize: hp(1.8),
		fontWeight: '600',
		color: '#525252',
	},
	reviewsCount: {
		marginLeft: 5,
		fontSize: hp(1.5),
		fontWeight: '500',
		color: '#525252',
	}
});
