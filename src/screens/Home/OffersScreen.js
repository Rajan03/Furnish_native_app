import {FlatList, ScrollView} from "react-native";

import {ScrollableLayout} from "container";
import {OfferCard, ScreenHeader} from "components";
import {
	Sofa,
	BgLessChair,
	BgLessPlasticChair,
	BgLessLamp,
} from "constants/Images";
import {OfferStyles as styles} from "./Home.styles";

const offers = [
	{
		offCount: 20,
		title: "Today's Special!",
		description: "Get 20% off on your first three order. Only valid for today",
		image: Sofa,
		backgroundColor: "#e8e8e8",
	},
	{
		offCount: 18,
		title: "Weekend Deals!",
		description: "Get 18% off on your first order. Valid for weekend only",
		image: BgLessChair,
		backgroundColor: "#e8e8e8",
	},
	{
		offCount: 30,
		title: "New Arrivals!",
		description: "Get 30% off on your first order. Valid for today only",
		image: BgLessLamp,
		backgroundColor: "#e8e8e8",
	},
	{
		offCount: 20,
		title: "Black Friday!",
		description: "Get 20% off on your first order. Valid for today only",
		image: BgLessPlasticChair,
		backgroundColor: "#e8e8e8",
	},
	{
		offCount: 33,
		title: "Diwali Offer!",
		description: "Get 33% off on your first order. Valid for today only",
		image: BgLessChair,
		backgroundColor: "#e8e8e8",
	}
]

const OffersScreen = ({navigation}) => {

	return (
		<ScrollableLayout>
			<ScreenHeader screenName={"Offers"} onBackPress={() => navigation.goBack()}/>
			<ScrollView contentContainerStyle={styles.offerContainer} horizontal>
				<FlatList data={offers}
									renderItem={({item}) =>
										<OfferCard onPress={() => console.log("Offer Card Pressed")}
															 styles={styles.offerCard} offers={[item]}/>}
									showsVerticalScrollIndicator={false}
									keyExtractor={(item, i) => i.toString()}/>
			</ScrollView>
		</ScrollableLayout>
	);
}

export default OffersScreen;
