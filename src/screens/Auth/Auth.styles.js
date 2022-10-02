import {StyleSheet} from "react-native";
import styled from "styled-components/native";
import {hp, normalize, wp} from "utils";

//#region COMMON STYLES
export const OrSeparator = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
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
  margin: 0 10px;
`;

// Header
export const BackBtn = styled.Pressable`
  margin-top: 15px;
  margin-left: 15px;
  margin-right: auto;
  padding: 5px;
`;
export const LogoStyles = styled.Image`
  height: ${hp(20)}px;
  width: ${wp(100)}px;
  margin-top: 20px;
  align-self: center;
`;
export const FormHeaderText = styled.Text`
  font-size: ${normalize(18)}px;
  font-weight: 200;
  text-align: center;
  margin-bottom: 30px;
`;

// Image/Illustration
export const ImageContainer = styled.View`
  height: ${hp(40)}px;
  width: ${wp(100)}px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;
export const ImageStyles = styled.Image`
  flex: 1;
`;

// Same styles extended to SignIn and SignUp screens
export const HeaderText = styled.Text`
  font-size: ${normalize(34)}px;
  font-weight: 600;
  text-align: center;
`;
export const RedirectText = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

export const FormGroup = styled.View`
  padding: 20px;
`;

// Footer
export const FormFooter = styled.View`
  padding: 20px;
  margin-top: auto;
  min-height: 200px;
  justify-content: flex-end;
`;
export const OAuthBtnActions = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
//#endregion COMMON STYLES

//#region OAUTH SCREEN STYLES
export const OAuthStyleSheet = StyleSheet.create({
    redirectText: {
        fontWeight: "bold",
    }
});
export const ActionsContainer = styled.View`
  flex: 1;
  padding: 20px;
`;
export const OAuthActions = styled.View`
  padding: 25px 0;
  margin-bottom: 30px;
`;
//#endregion OAUTH SCREEN STYLES

//#region SIGN IN SCREEN STYLES
export const SignInStyleSheet = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    checkboxContainer: {
        marginRight: 'auto',
        flexDirection: "row",
        alignItems: "center",
    },
    checkboxLabel: {
        alignSelf: "flex-start",
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
        marginBottom: 10,
    }
});

// Sign In Form
export const SignInHeaderText = styled(HeaderText)`
  font-size: ${normalize(24)}px;
  margin-bottom: 30px;
`;
export const SignInFormAction = styled.View`
  margin-top: 20px;
  flex-direction: column;
`;
//#endregion SIGN IN SCREEN STYLES

//#region SIGN UP SCREEN STYLES
export const SignUpStyleSheet = StyleSheet.create({
    redirectText: {
        fontWeight: "bold",
    },
    input: {
        marginBottom: 10,
    }
});
export const SignUpHeaderText = styled(HeaderText)`
  font-size: ${normalize(24)}px;
  margin-bottom: 30px;
`;
//#endregion SIGN UP SCREEN STYLES

//#region FORGOT PASSWORD SCREEN STYLES
export const ForgotPasswordStyleSheet = StyleSheet.create({
    redirectText: {
        fontWeight: "bold",
    },
    input: {
        marginBottom: 15,
    }
});

export const ForgotPswFooter = styled(FormFooter)`
  min-height: 100px;
`;

export const FooterMsgText = styled.Text`
  font-size: ${normalize(14)}px;
  font-weight: 300;
  color: #aaab9c;
`;
//#endregion FORGOT PASSWORD SCREEN STYLES

//#region OTP SCREEN STYLES
export const OTPStyleSheet = StyleSheet.create({
    redirectText: {
        fontWeight: "bold",
    }
});
//#endregion OTP SCREEN STYLES

