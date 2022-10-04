import {useState} from "react";
import {Ionicons} from '@expo/vector-icons';

import {SafeAreaLayout, ScrollableLayout} from "container";
import {CategoryCard, OfferCard, ProductCard, SearchInput} from "components";
import {Sofa, Glass, Lamp, BookCase, Chair, FoamChair} from "constants/Images";
import {hp} from "utils";
import {
    Avatar,
    CategoryCardStyles,
    CategoryLayout,
    ChipTxt, EvenProductCardStyles,
    GoodMorningTxt,
    Header,
    HomeStyles as styles,
    IconBtn,
    MostPopularCatChip,
    MostPopularCatChips,
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
    UserNameTxt
} from "./Home.styles";
import {FlatList} from "react-native";

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
        title: "Monday's Special!",
        description: "Get 18% off on your first order. Valid for monday morning",
        image: Sofa,
        backgroundColor: "#eff6ff",
    }
]
const categories = [
    {
        title: "Sofa",
        icon: "sofa-single",
    },
    {
        title: "Table",
        icon: "table-furniture",
    },
    {
        title: "Chair",
        icon: "chair-rolling",
    },
    {
        title: "Lamp",
        icon: "lamp",
    },
    {
        title: "Kitchen",
        icon: "fridge",
    },
    {
        title: "Cupboard",
        icon: "cupboard",
    },
    {
        title: "Others",
        icon: "dots-horizontal-circle-outline",
    },
]
const products = [
    {
        id: 1,
        name: "Small Book Case",
        price: 1450,
        image: BookCase,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia," +
            " nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam lacinia, " +
            "nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl.",
        rating: 4.7,
        reviewsCount: 100,
        soldCount: 120,
        reviews: [
            {
                name: "John Doe",
                rating: 4.5,
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia,",
            },
        ]
    },
    {
        id: 2,
        name: "Glass Lamp",
        price: 400,
        image: Lamp,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia," +
            " nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam lacinia, " +
            "nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl.",
        rating: 4.2,
        reviewsCount: 100,
        soldCount: 300,
        reviews: [
            {
                name: "John Doe",
                rating: 4.5,
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia,",
            },
        ]
    },
    {
        id: 3,
        name: "Glass Package",
        price: 220,
        image: Glass,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia," +
            " nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam lacinia, " +
            "nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl.",
        rating: 4.6,
        reviewsCount: 100,
        soldCount: 900,
        reviews: [
            {
                name: "John Doe",
                rating: 4.5,
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia,",
            },
        ]
    },
    {
        id: 4,
        name: "Wooden Chair",
        price: 370,
        image: Chair,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia," +
            " nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam lacinia, " +
            "nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl.",
        rating: 4.9,
        reviewsCount: 100,
        soldCount: 77,
        reviews: [
            {
                name: "John Doe",
                rating: 4.5,
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia,",
            },
        ]
    },
    {
        id: 5,
        name: "Foam Padded Chair",
        price: 2000,
        image: FoamChair,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia," +
            " nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam lacinia, " +
            "nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl.",
        rating: 4.5,
        reviewsCount: 100,
        soldCount: 100,
        reviews: [
            {
                name: "John Doe",
                rating: 4.5,
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia,",
            },
        ]
    },
];

const SectionHeading = ({title, onPress}) => (
    <SectionHeaderContainer>
        <SectionHeader>{title}</SectionHeader>
        <SectionHeaderBtn onPress={onPress}>
            <SectionHeaderBtnTxt>See All</SectionHeaderBtnTxt>
            <Ionicons name="chevron-forward-outline" size={16} color="#525252"/>
        </SectionHeaderBtn>
    </SectionHeaderContainer>)

const HomeScreen = () => {
    const [search, setSearch] = useState('');
    const [popularFilter, setPopularFilter] = useState('All');

    const viewAllPressed = (pressedFor) => {
        console.log('View All Pressed For : ', pressedFor)
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
                    <IconBtn>
                        <Ionicons name="notifications-outline" size={hp(2.5)} color="#525252"/>
                    </IconBtn>
                </Header>

                {/* Search bar */}
                <SearchInput value={search} onChange={setSearch} placeholder="Search.."/>

                {/* Special Offer Card */}
                <SpecialOfferLayout>
                    {/* Section Heading */}
                    <SectionHeading title={"Special Offer"} onPress={() => viewAllPressed("specialOffer")}/>

                    {/* Offer Card Slider */}
                    <OfferCard styles={styles.offerCard} offer={offers}/>
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
                    <SectionHeading title={"Most Popular"} onPress={() => viewAllPressed("mostPopular")}/>

                    {/* Categories ScrollView */}
                    <MostPopularCatChips horizontal showsHorizontalScrollIndicator={false}>
                        {/* 'All' Chip */}
                        <MostPopularCatChip key={'all'} isSelected={popularFilter.toLowerCase() === 'all'}>
                            <ChipTxt isSelected={popularFilter.toLowerCase() === 'all'}>All</ChipTxt>
                        </MostPopularCatChip>

                        {/* Categories Chips */}
                        {categories.map(({title}) => {
                            const selected = popularFilter.toLowerCase() === title.toLowerCase()
                            return <>
                                <MostPopularCatChip isSelected={selected} key={title}>
                                    <ChipTxt isSelected={selected}>{title}</ChipTxt>
                                </MostPopularCatChip>
                            </>
                        })}
                    </MostPopularCatChips>

                </MostPopularLayout>

                {/* Products FlatList */}
                <MostPopularProducts horizontal>
                    <FlatList data={products}
                              renderItem={({item}) => <ProductCard
                                  product={item}
                                  styles={!(item.id % 2) ? EvenProductCardStyles : OddProductCardStyles}/>}
                              numColumns={2}
                              columnWrapperStyle={ProductsRow}
                              showsVerticalScrollIndicator={false}
                    />
                </MostPopularProducts>
            </ScrollableLayout>
        </SafeAreaLayout>
    )
}

export default HomeScreen;
