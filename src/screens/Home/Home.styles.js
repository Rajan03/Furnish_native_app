import {StyleSheet} from 'react-native';
import styled from "styled-components/native";
import {SCREEN_WIDTH} from "../../utils";

export const HomeStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    }
});

//#region Header
export const Header = styled.View`
  height: 90px;

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
  font-size: 16px;
  color: #8D94A2;
`;

// User Name Text
export const UserNameTxt = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #525252;
`;

// Menu Icon Btn
export const IconBtn = styled.Pressable`
  width: 40px;
  height: 40px;
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
  margin-top: 35px;
`;
export const SectionHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
export const SectionHeader = styled.Text`
    font-size: 24px;
    font-weight: 700;
    color: #525252;
`;
export const SectionHeaderBtn = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const SectionHeaderBtnTxt = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: #525252;
`;
//#endregion Special Offers

//#region Category
export const CategoryLayout = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 35px;
`;
export const CategoryCardStyles = {
    width: (SCREEN_WIDTH - 40) / 4,
    marginBottom: 20,
};
