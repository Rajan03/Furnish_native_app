import {View, Text, Image, Pressable} from 'react-native'
import {Screen} from "react-native-screens";
import {FontAwesome} from "@expo/vector-icons";
import {Formik} from "formik";
import * as yup from "yup";

import {InputWithIcon, KeyboardAvoidingWrapper, OAuthBtn, TextBtnContained} from "../../components";
import {CreateAccountStyles as styles} from './Auth.styles'
import {Logo} from '../../../constants/Images'

// Validation Schema for Signup Form
const validationSchema = yup.object().shape({
    name: yup.string().required('Required!').min(3, 'Must have at least 3 characters!').label("Name"),
    email: yup.string().required('Required!').email('Invalid email').label("Email"),
    password: yup.string()
        .oneOf([yup.ref("password"), null], "Password do not match")
        .required('Required!').min(6, 'Too Short!').label("Password"),
    confirmPassword: yup.string().required('Required!').min(6, 'Too Short!').label("Confirm Password"),
});

const CreateAccount = ({navigation}) => {

    return (
        <KeyboardAvoidingWrapper>
            <Screen style={styles.container}>

                {/* Go Back Icon */}
                <Pressable style={styles.goBackIcon} onPress={() => navigation.navigate('OAuth')}>
                    <FontAwesome name="chevron-left" size={24} color="black"/>
                </Pressable>

                {/* Logo */}
                <Image source={Logo} style={styles.logoImage}/>

                {/* Title */}
                <Text style={styles.createText}>Create Account</Text>

                {/* Create Account Form */}
                <View style={styles.form}>
                    <Formik initialValues={{name: '', email: '', password: '', confirmPassword: '', rememberMe: false}}
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
                                {/* Name */}
                                <View style={styles.inputContainer}>
                                    <InputWithIcon icon={"user"} placeholder="Name" value={values.name}
                                                   error={(touched.name && errors.name) ? errors.name : ''}
                                                   onBlur={handleBlur('name')} onChangeText={handleChange('name')}/>
                                </View>

                                {/* Email */}
                                <View style={styles.inputContainer}>
                                    <InputWithIcon icon={"envelope"} placeholder="Email" value={values.email}
                                                   error={(touched.email && errors.email) ? errors.email : ''}
                                                   onBlur={handleBlur('email')} onChangeText={handleChange('email')}/>
                                </View>

                                {/* Password */}
                                <View style={styles.inputContainer}>
                                    <InputWithIcon icon={"lock"} placeholder="Password" value={values.password}
                                                   textContentType={"password"} secureTextEntry={true}
                                                   error={(touched.password && errors.password) ? errors.password : ''}
                                                   onBlur={handleBlur('password')}
                                                   onChangeText={handleChange('password')}/>
                                </View>

                                {/* Confirm Password */}
                                <View style={styles.inputContainer}>
                                    <InputWithIcon icon={"lock"} placeholder="Confirm Password"
                                                   value={values.confirmPassword}
                                                   textContentType={"password"} secureTextEntry={true}
                                                   error={(touched.confirmPassword && errors.confirmPassword) ? errors.confirmPassword : ''}
                                                   onBlur={handleBlur('confirmPassword')}
                                                   onChangeText={handleChange('confirmPassword')}/>
                                </View>

                                {/* Sign Up Btn */}
                                <View style={styles.signUpBtn}>
                                    <TextBtnContained
                                        btnText="Sign Up"
                                        onPressCallback={handleSubmit}
                                    />
                                </View>
                            </>
                        )}
                    </Formik>

                    {/* Or Separator */}
                    <View style={styles.orSeparator}>
                        <View style={styles.orSeparatorLine}></View>
                        <Text style={styles.orSeparatorText}>or continue with</Text>
                        <View style={styles.orSeparatorLine}></View>
                    </View>

                    {/* Social Login Buttons */}
                    <View style={styles.socialLoginBtn}>
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
                </View>

                {/* Sign In redirection text */}
                <View style={styles.signInAction}>
                    <Text style={styles.signInText}>Already have an account? {"  "}</Text>
                    <Pressable onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.signInActionTxt}>Sign In</Text>
                    </Pressable>
                </View>
            </Screen>
        </KeyboardAvoidingWrapper>
    )
}

export default CreateAccount
