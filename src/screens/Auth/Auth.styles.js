import {StyleSheet} from "react-native";
import styled from "styled-components/native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import {normalizeHeight} from "../../../utils";

export const ScreenContainer = {
    flex: 1,
    backgroundColor: "#ffffff",
}

//#region OAUTH SCREEN STYLES
export const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const ImageStyles = styled.Image`
  flex: 1;
`;
export const ActionsContainer = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: space-evenly;
`;
export const HeaderText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;
//#endregion OAUTH SCREEN STYLES

//#region SIGN IN SCREEN STYLES
export const SignInStyleSheet = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: normalizeHeight(3),
    },
    checkboxLabel: {
        marginLeft: 8,
    },
    signInBtn: {
        marginVertical: 15,
    },
    forgotPasswordBtn: {
        marginLeft: "auto",
    },
    redirectText: {
        fontWeight: "bold",
    },
    input: {
        marginVertical: normalizeHeight(2),
    }
});
export const SignInContainer = {
    flex: 1,
    flexDirection: "column",
}
export const SignInLogoContainer = styled.View`
  justify-content: flex-start;
`;
export const LogoStyles = styled.Image`
  align-self: center;
  height: ${hp("20%")}px;
`;
export const BackBtn = styled.Pressable`
  padding: ${normalizeHeight(1.5)}px;
  margin-left: ${normalizeHeight(1)}px;
`;
export const SignInFormGroup = styled.View`
  flex: 1;
  padding: 0 20px;
`;
export const SignInFormContainer = styled.View``;
export const SignInHeaderText = styled.Text`
  font-size: ${normalizeHeight(3.5)}px;
  font-weight: 600;
  text-align: center;
  margin: ${normalizeHeight(3)}px 0;
`;
export const OAuthBtnActions = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
//#endregion SIGN IN SCREEN STYLES

//#region COMMON STYLES
export const OrSeparator = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${normalizeHeight(2)}px 0;
`;
export const OrSeparatorLine = styled.View`
  flex: 1;
  height: 1px;
  background-color: #acada1;
`;
export const OrSeparatorText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #acada1;
  margin: 0 ${normalizeHeight(1)}px;
`;

export const RedirectText = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${normalizeHeight(3)}px 0;
`;
//#endregion COMMON STYLES
