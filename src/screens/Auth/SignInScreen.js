import {Pressable, Text} from 'react-native'
import {FontAwesome} from "@expo/vector-icons";
import * as yup from "yup";

import {Logo} from 'constants/Images'
import {CheckBox, FormikForm, InputWithIcon, OAuthBtn, TextBtnContained} from "components";
import {ScrollableLayout} from "container";
import {ScreenNames} from "constants/ScreenConstants";
import {
    BackBtn,
    FormFooter,
    FormGroup,
    LogoStyles,
    OAuthBtnActions,
    OrSeparator,
    OrSeparatorLine,
    OrSeparatorText,
    RedirectText,
    SignInFormAction,
    SignInHeaderText,
    SignInStyleSheet as styles
} from "./Auth.styles";

// Validation Schema for Signup Form
const validationSchema = yup.object().shape({
    email: yup.string().required('Required!').email('Invalid email').label("Email"),
    password: yup.string().required('Required!').min(6, 'Too Short!').label("Password"),
});

const SignInScreen = ({navigation}) => {

    return (
        <>
            <ScrollableLayout withKeyboardAvoidance>
                {/* Go Back Icon */}
                <BackBtn onPress={() => navigation.navigate(ScreenNames.OAuth)}>
                    <FontAwesome name="chevron-left" size={24} color="black"/>
                </BackBtn>

                {/* Logo */}
                <LogoStyles source={Logo} resizeMode={"contain"}/>

                {/* Container 2 */}
                <FormikForm validationSchema={validationSchema} onSubmit={(values) => console.log(values)}
                            initialState={{email: '', password: '', rememberMe: false}}>
                    {({handleChange, handleBlur, handleSubmit, values, touched, errors, setFieldValue}) => (
                        <FormGroup>
                            {/* Title */}
                            <SignInHeaderText>Login to Your Account</SignInHeaderText>

                            {/* Email */}
                            <InputWithIcon icon={"envelope"} placeholder="Email" value={values.email}
                                           error={(touched.email && errors.email) ? errors.email : ''}
                                           onBlur={handleBlur('email')} style={styles.input}
                                           onChangeText={handleChange('email')}/>

                            {/* Password */}
                            <InputWithIcon icon={"lock"} placeholder="Password" value={values.password}
                                           textContentType={"password"} secureTextEntry
                                           error={(touched.password && errors.password) ? errors.password : ''}
                                           onBlur={handleBlur('password')}
                                           onChangeText={handleChange('password')}/>

                            {/* Sign In btn and Remember me */}
                            <SignInFormAction>
                                {/* Remember Me Checkbox */}
                                <Pressable onPress={() => setFieldValue('rememberMe', !values.rememberMe)}
                                           style={styles.checkboxContainer}>
                                    <CheckBox checked={values.rememberMe}
                                              onChange={(check) => setFieldValue('rememberMe', check)}/>
                                    <Text style={styles.checkboxLabel}>Remember Me</Text>
                                </Pressable>

                                {/* Sign In Btn */}
                                <TextBtnContained styles={styles.signInBtn} btnText="Sign In"
                                                  onPressCallback={handleSubmit}/>

                                {/* Forgot Password Action */}
                                <Pressable style={styles.forgotPasswordBtn}
                                           onPress={() => navigation.navigate(ScreenNames.ForgotPassword)}>
                                    <Text>Forgot Password?</Text>
                                </Pressable>
                            </SignInFormAction>
                        </FormGroup>
                    )}
                </FormikForm>

                {/* Container 3 */}
                <FormFooter>
                    {/* Or Separator */}
                    <OrSeparator>
                        <OrSeparatorLine></OrSeparatorLine>
                        <OrSeparatorText>or continue with</OrSeparatorText>
                        <OrSeparatorLine></OrSeparatorLine>
                    </OrSeparator>

                    {/* Social Login Buttons */}
                    <OAuthBtnActions>
                        <OAuthBtn btnIcon={<FontAwesome name="google" size={24} color="gray"/>} onlyIcons
                                  onPressCallback={() => console.log("Google")}/>
                        <OAuthBtn btnIcon={<FontAwesome name="facebook" size={24} color="gray"/>} onlyIcons
                                  onPressCallback={() => console.log("Facebook")}/>
                    </OAuthBtnActions>

                    {/* Sign Up redirection text with signInText Styles */}
                    <RedirectText>
                        <Text>Don't have an account? {"  "}</Text>
                        <Pressable onPress={() => navigation.navigate(ScreenNames.CreateAccount)}>
                            <Text style={styles.redirectText}>Sign Up</Text>
                        </Pressable>
                    </RedirectText>
                </FormFooter>
            </ScrollableLayout>
        </>
    );
}

export default SignInScreen
