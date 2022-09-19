import {View, Text, Image, Pressable} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

import {OAuthStyles as styles} from "./Auth.styles";
import {Login} from "../../../constants/Images";
import {OAuthBtn, TextBtnContained} from "../../components";

const OAuthScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* Illustration */}
            <View style={styles.illustration}>
                <Image source={Login} style={styles.illustrationImage}/>
            </View>

            <View style={styles.textAndActions}>
                {/* Title */}
                <Text style={styles.loginText}>Let's you in</Text>

                {/* OAuth Buttons */}
                <View style={styles.oAuthBtn}>
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
                <View style={styles.orSeparator}>
                    <View style={styles.orSeparatorLine}></View>
                    <Text style={styles.orSeparatorText}>OR</Text>
                    <View style={styles.orSeparatorLine}></View>
                </View>

                {/* Sign In With Password btn */}
                <View style={styles.signInWithPasswordBtn}>
                    <TextBtnContained
                        btnText="Sign In With Password"
                        onPressCallback={() => navigation.navigate("SignIn")}
                    />
                </View>

                {/* Sign Up redirection text */}
                <View style={styles.signUpAction}>
                    <Text style={styles.signUpText}>Don't have an account? {"  "}</Text>
                    <Pressable onPress={() => navigation.navigate("CreateAccount")}>
                        <Text style={styles.signUpActionTxt}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default OAuthScreen;
