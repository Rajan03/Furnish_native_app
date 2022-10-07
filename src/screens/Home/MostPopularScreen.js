import {useState} from "react";
import {FlatList, ScrollView} from "react-native";
import {ScrollableLayout} from "container";
import {ScreenHeader, ProductCard, HorizontalChipSet} from "components";
import {products, categories} from "constants/data";
import {
	EvenProductCardStyles,
	OddProductCardStyles, OfferScreenChipsStyles,
	OfferStyles as styles,
	ProductsRow
} from "./Home.styles";

const MostPopularScreen = ({navigation}) => {
	const [popularFilter, setPopularFilter] = useState('all');

	return (
		<ScrollableLayout>
			<ScreenHeader screenName={"Most Popular"} onBackPress={() => navigation.goBack()}/>

			<HorizontalChipSet styles={OfferScreenChipsStyles} categories={categories} selectedCategory={popularFilter} onSelectionChange={setPopularFilter}/>

			<ScrollView contentContainerStyle={styles.offerContainer} horizontal>
				<FlatList data={products}
									key={'horizontal'}
									renderItem={({item}) =>
										<ProductCard product={item}
																 styles={!(item.id % 2) ? EvenProductCardStyles : OddProductCardStyles}/>}
									numColumns={2}
									columnWrapperStyle={ProductsRow}
									showsVerticalScrollIndicator={false}
									keyExtractor={item => item.id.toString()}/>
			</ScrollView>
		</ScrollableLayout>
	);
}

export default MostPopularScreen;
