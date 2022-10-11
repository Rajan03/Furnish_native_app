import {useState} from "react";
import {Ionicons} from '@expo/vector-icons';
import {FlatList} from "react-native";

import {SafeAreaLayout, ScrollableLayout} from "container";
import {CategoryCard, OfferCard, ProductCard, SearchInput, HorizontalChipSet, SectionHeader} from "components";
import {ScreenNames} from "constants/ScreenConstants";
import {hp} from "utils";
import {
	Avatar,
	CategoryCardStyles,
	CategoryLayout,
	EvenProductCardStyles,
	GoodMorningTxt,
	Header,
	HomeStyles as styles,
	IconBtn,
	MostPopularLayout,
	MostPopularProducts,
	OddProductCardStyles,
	ProductsRow,
	SpecialOfferLayout,
	UserInfo,
	UserName,
	UserNameTxt, chipsContainer
} from "./Home.styles";
import {offers, categories, products} from "constants/data";

const HomeScreen = ({navigation}) => {
	const [search, setSearch] = useState('');
	const [popularFilter, setPopularFilter] = useState('all');

	const viewAllPressed = (pressedFor) => {
		navigation.navigate(pressedFor);
	}

	const onCatSelect = (i) => {
		navigation.navigate(ScreenNames.CATEGORY, {category: categories[i]});
	}

	return (
		<SafeAreaLayout>
			<ScrollableLayout style={styles.container}>
				{/* Header */}
				<Header>
					{/* User Info */}
					<UserInfo>
						{/* Avatar */}
						<Avatar source={{uri: "https://randomuser.me/api/portraits/thumb/women/12.jpg"}}/>

						<UserName>
							<GoodMorningTxt>Good Morning 👋</GoodMorningTxt>
							<UserNameTxt>Andrew Ainsley</UserNameTxt>
						</UserName>
					</UserInfo>

					{/* Menu Btn */}
					<IconBtn onPress={() => navigation.navigate(ScreenNames.NOTIFICATIONS)}>
						<Ionicons name="notifications-outline" size={hp(2.5)} color="#525252"/>
					</IconBtn>
				</Header>

				{/* Search bar */}
				<SearchInput value={search} onChange={setSearch} placeholder="Search.."/>

				{/* Special Offer Card */}
				<SpecialOfferLayout>
					{/* Section Heading */}
					<SectionHeader title={"Special Offer"} onPress={() => viewAllPressed(ScreenNames.OFFERS)}/>

					{/* Offer Card Slider */}
					<OfferCard onPress={() => console.log("Offer Card Pressed")}
										 styles={styles.offerCard} offers={offers}/>
				</SpecialOfferLayout>

				{/* Categories Icons */}
				<CategoryLayout>
					{categories.map((category, i) => (
						<CategoryCard key={i} category={category} onCatPress={() => onCatSelect(i)}
													styles={CategoryCardStyles}/>
					))}
				</CategoryLayout>

				{/* Most Popular */}
				<MostPopularLayout>
					{/* Section Heading */}
					<SectionHeader title={"Most Popular"} onPress={() => viewAllPressed(ScreenNames.POPULAR)}/>

					{/* Categories ScrollView */}
					<HorizontalChipSet styles={chipsContainer} categories={categories} selectedCategory={popularFilter} onSelectionChange={setPopularFilter}/>
				</MostPopularLayout>

				{/* Products FlatList */}
				<MostPopularProducts horizontal>
					<FlatList data={products}
										key={'horizontal'}
										renderItem={({item}) => <ProductCard
											onCardPress={() => navigation.navigate(ScreenNames.PRODUCT_DETAILS, {productId: item.id})}
											product={item}
											styles={!(item.id % 2) ? EvenProductCardStyles : OddProductCardStyles}/>}
										numColumns={2}
										columnWrapperStyle={ProductsRow}
										showsVerticalScrollIndicator={false}
										keyExtractor={item => item.id.toString()}
					/>
				</MostPopularProducts>
			</ScrollableLayout>
		</SafeAreaLayout>
	)
}

export default HomeScreen;
