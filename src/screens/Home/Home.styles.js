import {StyleSheet} from 'react-native';
import styled from "styled-components/native";
import {hp, IS_SMALL_DEVICE, SCREEN_WIDTH, SCREEN_HEIGHT} from "utils";

//#region Common Styles
export const chipsContainer = {
	marginTop: 20,
}
//#endregion Common Styles

//#region Home Screen
export const HomeStyles = StyleSheet.create({
	container: {
		paddingHorizontal: hp(2),
	},
	offerCard: {marginTop: hp(2)},
});

//#region Header
export const Header = styled.View`
  height: ${hp(10)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px 0;
`;

// User Info
export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

// Avatar
export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;

// UserName and Salutation
export const UserName = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

// Good Morning Text
export const GoodMorningTxt = styled.Text`
  font-size: ${hp(1.8)}px;
  color: #8D94A2;
`;

// User Name Text
export const UserNameTxt = styled.Text`
  font-size: ${hp(2.3)}px;
  font-weight: 600;
  color: #525252;
`;

// Menu Icon Btn
export const IconBtn = styled.Pressable`
  width: ${IS_SMALL_DEVICE ? "25px" : "40px"};
  height: ${IS_SMALL_DEVICE ? '90%' : '60%'};
  border-radius: 10px;
  background-color: #f2f2f5;
  justify-content: center;
  align-items: center;
`;

//#endregion Header

//#region Special Offers
export const SpecialOfferLayout = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  margin-top: ${hp(3.5)}px;
`;
//#endregion Special Offers

//#region Category
export const CategoryLayout = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: ${hp(3.5)}px;
`;
export const CategoryCardStyles = {
	width: (SCREEN_WIDTH - (hp(2) * 2)) / 4,
	marginBottom: 20,
};
//#endregion Category

//#region Most Popular
export const MostPopularLayout = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  margin-top: ${hp(3.5)}px;
`;
export const MostPopularProducts = styled.ScrollView`
  margin-top: 20px;
`;
export const OddProductCardStyles = {
	width: ((SCREEN_WIDTH - 40) / 2) - 5,
	height: 300,
	marginRight: 5,
};
export const EvenProductCardStyles = {
	width: ((SCREEN_WIDTH - 40) / 2) - 5,
	height: 300,
	marginLeft: 5,
};
export const ProductsRow = {
	marginVertical: 10,
}
//#endregion Most Popular

//#endregion Home Screen

//#region Notifications Screen
export const NotificationStyles = StyleSheet.create({
	notificationContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "stretch",
	},
	notificationCard: {
		paddingHorizontal: hp(2),
		marginBottom: hp(4),
	}
});

//#endregion Notifications Screen

//#region Offers Screen
export const OfferStyles = StyleSheet.create({
	offerContainer: {
		paddingHorizontal: hp(2),
	},
	offerCard: {marginTop: hp(2)},
});
export const OfferScreenChipsStyles = {
	marginBottom: hp(2),
	paddingHorizontal: hp(2),
}
//#endregion Offers Screen

//#region Product Details Screen
export const ProductDetailsStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	backIcon: {
		fontSize: hp(3),
		color: "#525252",
		fontWeight: "bold",
	},
	productNameContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	productName: {
		fontSize: hp(3.2),
		fontWeight: "800",
		color: "#525252",
	},
	icon: {
		fontSize: hp(3.2),
		color: "#525252",
	},
	rateAndSold: {
		alignSelf: "flex-start",
		flexDirection: "row",
		marginTop: hp(1.2),
	},
	sectionTitle: {
		fontSize: hp(2),
		fontWeight: "700",
		color: "#525252",
	},
	description: {
		fontSize: hp(1.6),
		color: "#525252",
		marginTop: hp(1.2),
	},
	priceHelperText: {
		fontSize: hp(1.6),
		color: "#8a8a8a",
	},
	price: {
		fontSize: hp(2.5),
		fontWeight: "700",
		color: "#525252"
	},
	cartBtn: {
		flex: 1,
		marginLeft: hp(3),
		marginRight: hp(1.5),
	},
	cartBtnContent: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	cartIcon: {
		fontSize: hp(2),
		color: "#fff",
		marginRight: hp(1),
	},
	cartBtnTxt: {
		fontSize: hp(1.6),
		fontWeight: "600",
		color: "#fff",
	}
});

export const ProductImageContainer = styled.View`
  flex: 1;
  max-height: ${SCREEN_HEIGHT / 2}px;
  min-height: ${SCREEN_HEIGHT / 3}px;
  position: relative;
  flex-direction: column;
`;
export const BackIconBtn = styled.Pressable`
  position: absolute;
  top: ${hp(2)}px;
  left: ${hp(2)}px;

  justify-content: center;
  align-items: center;

  padding: ${hp(.6)}px;
  background-color: #f2f2f5;
  border-radius: 30px;
  z-index: 1;
`;
export const ProductBannerImage = styled.Image`
  flex: 1;
  width: 100%;
`;

export const ProductDetailsContainer = styled.View`
  flex: 1;
  padding: ${hp(2)}px;,
`;
export const ProductNameAndSoldContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding-bottom: ${hp(2)}px;
`;
export const ratingComponent = {
	marginLeft: hp(1.5),
}
export const soldComponent = {
	backgroundColor: "#ececec",
}
export const ProductDescriptionContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding-top: ${hp(1.2)}px;
  border-top-width: 1px;
  border-top-color: #f1f1f1;
`;
export const QuantityBtnContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${hp(2)}px;
`;
export const QuantityBtn = {
	marginLeft: hp(1.5),
}
export const ActionArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: ${hp(2)}px;
  border-top-width: 1px;
  border-top-color: #f1f1f1;
`;
export const PriceBox = styled.View`
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;
export const CartBtn = {
	borderRadius: 90,
}
//#endregion Product Details Screen
