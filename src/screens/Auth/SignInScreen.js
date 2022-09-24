import {Image, Pressable, Text, View} from 'react-native'
import {Screen} from "react-native-screens";
import {FontAwesome} from "@expo/vector-icons";
import * as yup from "yup";
import SafeAreaView from "react-native-safe-area-view";

import {
    CheckBox,
    FormikForm,
    InputWithIcon,
    KeyboardAvoidingWrapper,
    OAuthBtn,
    TextBtnContained
} from "../../components";
import {Logo} from '../../../constants/Images'
import {
    BackBtn, LogoStyles, OAuthBtnActions, OrSeparator, OrSeparatorLine, OrSeparatorText, RedirectText, ScreenContainer,
    SignInContainer, SignInFormContainer, SignInFormGroup, SignInHeaderText,
    SignInLogoContainer, SignInStyleSheet as styles
} from "./Auth.styles";

// Validation Schema for Signup Form
const validationSchema = yup.object().shape({
    email: yup.string().required('Required!').email('Invalid email').label("Email"),
    password: yup.string().required('Required!').min(6, 'Too Short!').label("Password"),
});

const SignInScreen = ({navigation}) => {

    return (
        <Screen style={ScreenContainer}>
            <KeyboardAvoidingWrapper>
                <SafeAreaView style={SignInContainer} forceInset={{top: "always"}}>
                    {/* Logo */}
                    <SignInLogoContainer>
                        {/* Go Back Icon */}
                        <BackBtn onPress={() => navigation.navigate('OAuth')}>
                            <FontAwesome name="chevron-left" size={24} color="black"/>
                        </BackBtn>

                        {/* Logo */}
                        <LogoStyles source={Logo} resizeMode={"contain"}/>
                    </SignInLogoContainer>

                    <SignInFormGroup>
                        {/* Title */}
                        <SignInHeaderText>Login to Your Account</SignInHeaderText>

                        {/* Create Account Form */}
                        <FormikForm validationSchema={validationSchema} onSubmit={(values) => console.log(values)}
                                    initialState={{email: '', password: '', rememberMe: false}}>
                            {({handleChange, handleBlur, handleSubmit, values, touched, errors, setFieldValue}) => (
                                <SignInFormContainer>
                                    {/* Email */}
                                    <InputWithIcon icon={"envelope"} placeholder="Email" value={values.email}
                                                   error={(touched.email && errors.email) ? errors.email : ''}
                                                   onBlur={handleBlur('email')} style={styles.input}
                                                   onChangeText={handleChange('email')}/>

                                    {/* Password */}
                                    <InputWithIcon icon={"lock"} placeholder="Password" value={values.password}
                                                   textContentType={"password"} secureTextEntry={true}
                                                   error={(touched.password && errors.password) ? errors.password : ''}
                                                   onBlur={handleBlur('password')}
                                                   onChangeText={handleChange('password')}/>

                                    {/* Remember Me Checkbox */}
                                    <Pressable onPress={() => setFieldValue('rememberMe', !values.rememberMe)}
                                               style={styles.checkboxContainer}>
                                        <CheckBox checked={values.rememberMe}
                                                  onChange={(check) => setFieldValue('rememberMe', check)}/>
                                        <Text style={styles.checkboxLabel}>Remember Me</Text>
                                    </Pressable>

                                    {/* Sign In Btn */}
                                    <TextBtnContained styles={styles.signInBtn} btnText="Sign In" onPressCallback={handleSubmit}/>

                                    {/* Forgot Password Action */}
                                    <Pressable style={styles.forgotPasswordBtn} onPress={() => navigation.navigate('ForgotPassword')}>
                                        <Text>Forgot Password?</Text>
                                    </Pressable>
                                </SignInFormContainer>
                            )}
                        </FormikForm>

                        {/* Or Separator */}
                        <OrSeparator>
                            <OrSeparatorLine></OrSeparatorLine>
                            <OrSeparatorText>or continue with</OrSeparatorText>
                            <OrSeparatorLine></OrSeparatorLine>
                        </OrSeparator>

                        {/* Social Login Buttons */}
                        <OAuthBtnActions>
                            {/* OAuth Buttons */}
                            <OAuthBtn
                                btnIcon={<FontAwesome name="google" size={24} color="gray"/>}
                                btnText="Continue with Google" onlyIcons
                                onPressCallback={() => {
                                    console.log("Google");
                                }}
                            />
                            <OAuthBtn
                                btnIcon={<FontAwesome name="facebook" size={24} color="gray"/>}
                                btnText="Continue with Facebook" onlyIcons
                                onPressCallback={() => {
                                    console.log("Facebook");
                                }}
                            />
                        </OAuthBtnActions>

                        {/* Sign Up redirection text with signInText Styles */}
                        <RedirectText>
                            <Text>Don't have an account? {"  "}</Text>
                            <Pressable onPress={() => navigation.navigate("CreateAccount")}>
                                <Text style={styles.redirectText}>Sign Up</Text>
                            </Pressable>
                        </RedirectText>
                    </SignInFormGroup>
                </SafeAreaView>
            </KeyboardAvoidingWrapper>
        </Screen>
    );
}

export default SignInScreen
