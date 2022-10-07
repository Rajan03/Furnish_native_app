import {FlatList, ScrollView} from "react-native";
import {EvenProductCardStyles, OddProductCardStyles, OfferStyles as styles, ProductsRow} from "./Home.styles";
import {ScrollableLayout} from "../../container";
import {ProductCard, ScreenHeader} from "../../components";
import {products} from "constants/data";

const CategoryScreen = (props) => {
	const {navigation, route: {params: {category}}} = props;

	return (
		<ScrollableLayout>
			<ScreenHeader screenName={category.title} onBackPress={() => navigation.goBack()}/>
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
	)
}

export default CategoryScreen;
