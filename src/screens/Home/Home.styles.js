import {StyleSheet} from 'react-native';
import styled from "styled-components/native";
import {hp, IS_SMALL_DEVICE, SCREEN_WIDTH} from "utils";

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

//#region Common Styles
export const SectionHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`;
export const SectionHeader = styled.Text`
  font-size: ${hp(2.5)}px;
  font-weight: 700;
  color: #525252;
`;
export const SectionHeaderBtn = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const SectionHeaderBtnTxt = styled.Text`
  font-size: ${hp(1.6)}px;
  font-weight: 600;
  color: #525252;
`;
//#endregion Common Styles

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
