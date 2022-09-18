import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { OAuthStyles } from "./Auth.styles";
import { Login } from "../../../constants/Images";
import { OAuthBtn, TextBtnContained } from "../../components";

const OAuthScreeen = () => {
  return (
    <View style={OAuthStyles.container}>
      {/* Illustration */}
      <View style={OAuthStyles.illustration}>
        <Image source={Login} style={OAuthStyles.illustrationImage} />
      </View>

      {/* Title */}
      <View style={OAuthStyles.textAndActions}>
        <Text style={OAuthStyles.loginText}>Let's you in</Text>

        {/* OAuth Buttons */}
        <OAuthBtn
          btnIcon={<FontAwesome name="google" size={24} color="gray" />}
          btnText="Continue with Google"
          onPressCallback={() => {
            console.log("Google");
          }}
        />
        <OAuthBtn
          btnIcon={<FontAwesome name="facebook" size={24} color="gray" />}
          btnText="Continue with Facebook"
          onPressCallback={() => {
            console.log("Facebook");
          }}
        />

        {/* Or Seprator */}
        <View style={OAuthStyles.orSeprator}>
          <View style={OAuthStyles.orSepratorLine}></View>
          <Text style={OAuthStyles.orSepratorText}>OR</Text>
          <View style={OAuthStyles.orSepratorLine}></View>
        </View>

        {/* Sign In With Password btn */}
        <TextBtnContained
          btnText="Sign In With Password"
          onPressCallback={() => console.log("Go to Login Screen")}
        />

        {/* Sign Up redirection text */}
        <Text style={OAuthStyles.signUpText}>
          <Text>Don't have an account? {"  "}</Text>
          <Text style={OAuthStyles.signUpAction}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

export default OAuthScreeen;
