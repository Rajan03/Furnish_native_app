import {View, Text, Image, Pressable} from 'react-native'
import {Screen} from "react-native-screens";
import {FontAwesome} from "@expo/vector-icons";
import {Formik} from "formik";
import * as yup from "yup";

import {CheckBox, InputWithIcon, KeyboardAvoidingWrapper, OAuthBtn, TextBtnContained} from "../../components";
import {Logo} from '../../../constants/Images'

// Validation Schema for Signup Form
const validationSchema = yup.object().shape({
    email: yup.string().required('Required!').email('Invalid email').label("Email"),
    password: yup.string().required('Required!').min(6, 'Too Short!').label("Password"),
});

const SignInScreen = ({navigation}) => {

    return (
        <KeyboardAvoidingWrapper>
            <Screen>

                {/* Go Back Icon */}
                <Pressable onPress={() => navigation.navigate('OAuth')}>
                    <FontAwesome name="chevron-left" size={24} color="black"/>
                </Pressable>

                {/* Logo */}
                <Image source={Logo}/>

                {/* Create Account Form */}
                <View>
                    {/* Title */}
                    <Text>Login to Your Account</Text>

                    <Formik initialValues={{email: '', password: '', rememberMe: false}}
                            validationSchema={validationSchema}
                            onSubmit={(values) => console.log(values)}>
                        {({
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              values,
                              touched,
                              errors,
                              setFieldValue

                          }) => (
                            <>
                                {/* Email */}
                                <View>
                                    <InputWithIcon icon={"envelope"} placeholder="Email" value={values.email}
                                                   error={(touched.email && errors.email) ? errors.email : ''}
                                                   onBlur={handleBlur('email')} onChangeText={handleChange('email')}/>
                                </View>

                                {/* Password */}
                                <View>
                                    <InputWithIcon icon={"lock"} placeholder="Password" value={values.password}
                                                   textContentType={"password"} secureTextEntry={true}
                                                   error={(touched.password && errors.password) ? errors.password : ''}
                                                   onBlur={handleBlur('password')}
                                                   onChangeText={handleChange('password')}/>
                                </View>

                                {/* Remember Me Checkbox */}
                                <Pressable onPress={() => setFieldValue('rememberMe', !values.rememberMe)}
                                >
                                    <CheckBox checked={values.rememberMe}
                                              onChange={(check) => setFieldValue('rememberMe', check)}/>
                                    <Text>Remember Me</Text>
                                </Pressable>

                                {/* Sign Up Btn */}
                                <View>
                                    <TextBtnContained
                                        btnText="Sign In"
                                        onPressCallback={handleSubmit}
                                    />
                                </View>
                            </>
                        )}
                    </Formik>

                    {/* Forgot Password Action */}
                    <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text>Forgot Password?</Text>
                    </Pressable>

                    {/* Or Separator */}
                    <View>
                        <View></View>
                        <Text>or continue with</Text>
                        <View></View>
                    </View>

                </View>

                {/* Social Login Buttons */}
                <View>
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
                </View>

                {/* Sign Up redirection text with signInText Styles */}
                <View>
                    <Text>Don't have an account? {"  "}</Text>
                    <Pressable onPress={() => navigation.navigate("CreateAccount")}>
                        <Text>Sign Up</Text>
                    </Pressable>
                </View>
            </Screen>
        </KeyboardAvoidingWrapper>
    )
}

export default SignInScreen
