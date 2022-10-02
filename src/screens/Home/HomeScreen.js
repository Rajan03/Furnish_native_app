import {useState} from "react";
import {Ionicons} from '@expo/vector-icons';

import {SafeAreaLayout, ScrollableLayout} from "container";
import {CategoryCard, OfferCard, SearchInput} from "components";
import {Sofa} from "constants/Images";
import {
    Avatar,
    CategoryLayout,
    GoodMorningTxt,
    Header,
    HomeStyles as styles,
    IconBtn,
    SectionHeader,
    SectionHeaderBtn,
    SectionHeaderBtnTxt,
    SectionHeaderContainer,
    SpecialOfferLayout,
    UserInfo,
    UserName,
    UserNameTxt,
    CategoryCardStyles
} from "./Home.styles";

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
        title: "Vase",
        icon: "cupboard",
    },
    {
        title: "Others",
        icon: "dots-horizontal-circle-outline",
    },
]


const HomeScreen = () => {
    const [search, setSearch] = useState('');

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
                        <Ionicons name="notifications-outline" size={24} color="#525252"/>
                    </IconBtn>
                </Header>

                {/* Search bar */}
                <SearchInput value={search} onChange={setSearch} placeholder="Search.."/>

            </ScrollableLayout>
        </SafeAreaLayout>
    )
}

export default HomeScreen;
