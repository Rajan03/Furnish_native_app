import {Dimensions, StyleSheet} from "react-native";

const {height, width} = Dimensions.get("window");
const screenHeight = height + 20;

export const OAuthStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingBottom: 20,
    },

    // Illustration
    illustration: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    illustrationImage: {
        width: 450,
        height: 300,

        resizeMode: "contain",
    },

    // Create Account Text and OAuth Actions
    textAndActions: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 30,
    },

    loginText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 30,
    },

    // OAuth Buttons
    oAuthBtn: {
        width: 300,
        justifyContent: "center",
        alignItems: "stretch",
    },

    // OR Text with Separator
    orSeparator: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        marginBottom: 30,
    },
    orSeparatorLine: {
        width: 100,
        height: 1,
        backgroundColor: "lightgray",
    },
    orSeparatorText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "lightgray",
        marginHorizontal: 10,
    },

    // Sign In With Password Btn
    signInWithPasswordBtn: {
        width: 300,
    },

    // Don't Have Account? Sign Up Text
    signUpAction: {
        marginTop: "auto",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    signUpText: {
        fontSize: 14,
        fontWeight: "light",
        color: "grey",
    },
    signUpActionTxt: {
        marginTop: "auto",
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
    },
});

export const CreateAccountStyles = StyleSheet.create({
    container: {
        height: screenHeight,
        alignItems: "center",
        paddingBottom: 20,

        backgroundColor: "#fff",
    },

    goBackIcon: {
        alignSelf: "flex-start",
        marginTop: screenHeight * 0.05, // 5% of screen height
        marginLeft: 20,
    },

    logoImage: {
        width: 150,
        height: 150,
        marginTop: screenHeight * 0.02, // 2% of screen height
        marginBottom: screenHeight * 0.03, // 3% of screen height
        resizeMode: "contain",
    },

    // Complete Form Container
    form: {
        justifyContent: "flex-start",
        alignItems: "stretch",
        maxWidth: 350,
        width: 350,
    },

    // Form Header Text
    createText: {
        marginBottom: screenHeight * 0.02, // 2% of screen height

        color: "#000",
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "capitalize",
    },

    // Each Input
    inputContainer: {
        marginBottom: 7,
    },

    // Remember Me Checkbox
    rememberMeContainer: {
        alignSelf: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 1,
        marginTop: screenHeight * 0.01, // 1% of screen height
    },
    rememberMeText: {
        fontSize: 14,
        fontWeight: "light",
        color: "grey",
        marginLeft: 10,
    },

    // Sign Up Button
    signUpBtn: {
        alignSelf: "stretch",
        marginTop: 20,
    },

    // OAuth Signups
    orSeparator: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: screenHeight * 0.05, // 5% of screen height
    },
    orSeparatorLine: {
        width: 100,
        height: 1,
        backgroundColor: "lightgray",
    },
    orSeparatorText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "lightgray",
        marginHorizontal: 10,
    },

    // Social Login Buttons
    socialLoginBtn: {
        alignSelf: "stretch",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    // Already Have Account? Sign In Text
    signInAction: {
        ...OAuthStyles.signUpAction
    },
    signInText: {
        ...OAuthStyles.signUpText
    },
    signInActionTxt: {
        ...OAuthStyles.signUpActionTxt
    },
});

export const SignInWithPasswordStyles = StyleSheet.create({
    ...CreateAccountStyles,
    logoImage: {
        ...CreateAccountStyles.logoImage,
        marginTop: screenHeight * 0.04, // 4% of screen height
        marginBottom: screenHeight * 0.06, // 6% of screen height
    },

    // Form Header Text
    createText: {
        ...CreateAccountStyles.createText,
        marginBottom: screenHeight * 0.03, // 3% of screen height
    },

    // Forgot Password Text
    forgotPasswordText: {
        alignSelf: "flex-end",
        fontSize: 14,
        fontWeight: "light",
        color: "grey",
        marginTop: 20,
        marginRight: 10
    },

    // Don't Have Account? Sign Up Text
    signUpAction: {
        ...CreateAccountStyles.signInAction,
    },
    signUpText: {
        ...CreateAccountStyles.signInText,
    },
    signUpActionTxt: {
        ...CreateAccountStyles.signInActionTxt,
    },
});
