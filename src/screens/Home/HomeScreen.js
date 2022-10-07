import {useState} from "react";
import {Ionicons} from '@expo/vector-icons';
import {FlatList} from "react-native";

import {SafeAreaLayout, ScrollableLayout} from "container";
import {CategoryCard, OfferCard, ProductCard, SearchInput, HorizontalChipSet} from "components";
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
	SectionHeader,
	SectionHeaderBtn,
	SectionHeaderBtnTxt,
	SectionHeaderContainer,
	SpecialOfferLayout,
	UserInfo,
	UserName,
	UserNameTxt, chipsContainer
} from "./Home.styles";
import {offers, categories, products} from "constants/data";

// @TODO: Create a new component for the Section Header
const SectionHeading = ({title, onPress}) => (
	<SectionHeaderContainer>
		<SectionHeader>{title}</SectionHeader>
		<SectionHeaderBtn onPress={onPress}>
			<SectionHeaderBtnTxt>See All</SectionHeaderBtnTxt>
			<Ionicons name="chevron-forward-outline" size={16} color="#525252"/>
		</SectionHeaderBtn>
	</SectionHeaderContainer>)

const HomeScreen = ({navigation}) => {
	const [search, setSearch] = useState('');
	const [popularFilter, setPopularFilter] = useState('all');

	const viewAllPressed = (pressedFor) => {
		navigation.navigate(pressedFor);
	}

	const onCatSelect = (i) => {
		console.log(categories[i].title);
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
					<SectionHeading title={"Special Offer"} onPress={() => viewAllPressed(ScreenNames.OFFERS)}/>

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
					<SectionHeading title={"Most Popular"} onPress={() => viewAllPressed(ScreenNames.POPULAR)}/>

					{/* Categories ScrollView */}
					<HorizontalChipSet styles={chipsContainer} categories={categories} selectedCategory={popularFilter} onSelectionChange={setPopularFilter}/>
				</MostPopularLayout>

				{/* Products FlatList */}
				<MostPopularProducts horizontal>
					<FlatList data={products}
										key={'horizontal'}
										renderItem={({item}) => <ProductCard
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
