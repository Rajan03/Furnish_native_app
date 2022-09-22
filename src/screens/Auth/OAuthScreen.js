import {View, Text, Image, Pressable} from "react-native";
import {Screen} from "react-native-screens";
import {FontAwesome} from "@expo/vector-icons";

import {Login} from "../../../constants/Images";
import {OAuthBtn, TextBtnContained} from "../../components";
import {
    ActionsContainer,
    HeaderText,
    ImageContainer,
    ImageStyles, OrSeparator,
    OrSeparatorLine, RedirectText,
    ScreenContainer
} from "./Auth.styles";

const OAuthScreen = ({navigation}) => {
    return (
        <Screen style={ScreenContainer}>
            {/* Illustration */}
            <ImageContainer>
                <ImageStyles resizeMode={"contain"} source={Login}/>
            </ImageContainer>

            <ActionsContainer>

                {/* Title */}
                <HeaderText>Let's you in</HeaderText>

                {/* OAuth Buttons */}
                <View>
                    <OAuthBtn
                        btnIcon={<FontAwesome name="google" size={24} color="gray"/>}
                        btnText="Continue with Google"
                        onPressCallback={() => {
                            console.log("Google");
                        }}
                    />
                    <OAuthBtn
                        btnIcon={<FontAwesome name="facebook" size={24} color="gray"/>}
                        btnText="Continue with Facebook"
                        onPressCallback={() => {
                            console.log("Facebook");
                        }}
                    />
                </View>

                {/* Or Separator */}
                <OrSeparator>
                    <OrSeparatorLine></OrSeparatorLine>
                    <Text>OR</Text>
                    <OrSeparatorLine></OrSeparatorLine>
                </OrSeparator>

                {/* Sign In With Password btn */}
                <View>
                    <TextBtnContained
                        btnText="Sign In With Password"
                        onPressCallback={() => navigation.navigate("SignIn")}
                    />
                </View>

                {/* Sign Up redirection text */}
                <RedirectText>
                    <Text>Don't have an account? {"  "}</Text>
                    <Pressable onPress={() => navigation.navigate("CreateAccount")}>
                        <Text>Sign Up</Text>
                    </Pressable>
                </RedirectText>
            </ActionsContainer>
        </Screen>
    );
};

export default OAuthScreen;
