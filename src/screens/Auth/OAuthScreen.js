import {Pressable, Text} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

import {Login} from "constants/Images";
import {OAuthBtn, TextBtnContained} from "components";
import {ScrollableLayout} from "container";
import {ScreenNames} from "constants/ScreenConstants";
import {
    ActionsContainer,
    HeaderText,
    ImageContainer,
    ImageStyles,
    OAuthActions,
    OAuthStyleSheet as styles,
    OrSeparator,
    OrSeparatorLine,
    OrSeparatorText,
    RedirectText,
} from "./Auth.styles";

const OAuthScreen = ({navigation}) => {
    return (
        <>
            <ScrollableLayout>
                {/* Illustration */}
                <ImageContainer>
                    <ImageStyles resizeMode={"contain"} source={Login}/>
                </ImageContainer>

                <ActionsContainer>
                    {/* Title */}
                    <HeaderText>Let's you in</HeaderText>

                    {/* OAuth Buttons */}
                    <OAuthActions>
                        <OAuthBtn
                            btnIcon={<FontAwesome name="google" size={24} color="gray"/>}
                            btnText="Continue with Google"
                            styles={{marginBottom: 25}}
                            onPressCallback={() => console.log("Google")}
                        />
                        <OAuthBtn
                            btnIcon={<FontAwesome name="facebook-square" size={24} color="gray"/>}
                            btnText="Continue with Facebook"
                            onPressCallback={() => console.log("Facebook")}
                        />
                    </OAuthActions>

                    {/* Or Separator */}
                    <OrSeparator>
                        <OrSeparatorLine></OrSeparatorLine>
                        <OrSeparatorText>OR</OrSeparatorText>
                        <OrSeparatorLine></OrSeparatorLine>
                    </OrSeparator>

                    {/* Sign In With Password btn */}
                    <TextBtnContained
                        styles={{marginBottom: 20}}
                        btnText="Sign In With Password"
                        onPressCallback={() => navigation.navigate(ScreenNames.SignIn)}/>

                    {/* Sign Up redirection text */}
                    <RedirectText>
                        <Text>Don't have an account? {"  "}</Text>
                        <Pressable onPress={() => navigation.navigate(ScreenNames.CreateAccount)}>
                            <Text style={styles.redirectText}>Sign Up</Text>
                        </Pressable>
                    </RedirectText>
                </ActionsContainer>
            </ScrollableLayout>
        </>
    );
};

export default OAuthScreen;
