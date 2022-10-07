import {FlatList, ScrollView} from "react-native";

import {ScrollableLayout} from "container";
import {OfferCard, ScreenHeader} from "components";
import {OfferStyles as styles} from "./Home.styles";
import {offers} from "constants/data";

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
