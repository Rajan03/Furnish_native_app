import {Pressable, Text} from 'react-native'
import {FontAwesome} from "@expo/vector-icons";
import * as yup from "yup";

import {Logo} from '../../../constants/Images'
import {FormikForm, InputWithIcon, OAuthBtn, TextBtnContained} from "../../components";
import AuthLayout from "./Auth.Layout";
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
    SignUpHeaderText,
    SignUpStyleSheet as styles,
} from "./Auth.styles";

// Validation Schema for Signup Form
const validationSchema = yup.object().shape({
    name: yup.string().required('Required!').min(3, 'Must have at least 3 characters!').label("Name"),
    email: yup.string().required('Required!').email('Invalid email').label("Email"),
    password: yup.string()
        .required('Required!').min(6, 'Too Short!').label("Password"),
    confirmPassword: yup.string()
        .oneOf([yup.ref("password"), null], "Password do not match")
        .required('Required!').min(6, 'Too Short!').label("Confirm Password"),
});

const CreateAccount = ({navigation}) => {

    return (
        <AuthLayout withKeyboardAvoidance>
            {/* Go Back Icon */}
            <BackBtn onPress={() => navigation.navigate('OAuth')}>
                <FontAwesome name="chevron-left" size={24} color="black"/>
            </BackBtn>

            {/* Logo */}
            <LogoStyles source={Logo} resizeMode={"contain"}/>


            {/* Create Account Form */}
            <FormikForm
                initialState={{name: '', email: '', password: '', confirmPassword: '', rememberMe: false}}
                validationSchema={validationSchema} onSubmit={(values) => console.log(values)}>
                {({handleChange, handleBlur, handleSubmit, values, touched, errors,}) => (
                    <FormGroup>
                        {/* Title */}
                        <SignUpHeaderText>Create Your Account</SignUpHeaderText>

                        {/* Name */}
                        <InputWithIcon icon={"user"} placeholder="Name" value={values.name}
                                       error={(touched.name && errors.name) ? errors.name : ''}
                                       style={styles.input} onBlur={handleBlur('name')}
                                       onChangeText={handleChange('name')}/>

                        {/* Email */}
                        <InputWithIcon icon={"envelope"} placeholder="Email" value={values.email}
                                       error={(touched.email && errors.email) ? errors.email : ''}
                                       onBlur={handleBlur('email')} style={styles.input}
                                       onChangeText={handleChange('email')}/>

                        {/* Password */}
                        <InputWithIcon icon={"lock"} placeholder="Password" value={values.password}
                                       textContentType={"password"} secureTextEntry={true} style={styles.input}
                                       error={(touched.password && errors.password) ? errors.password : ''}
                                       onBlur={handleBlur('password')}
                                       onChangeText={handleChange('password')}/>

                        {/* Confirm Password */}
                        <InputWithIcon icon={"lock"} placeholder="Confirm Password"
                                       value={values.confirmPassword} style={styles.input}
                                       textContentType={"password"} secureTextEntry={true}
                                       error={(touched.confirmPassword && errors.confirmPassword) ? errors.confirmPassword : ''}
                                       onBlur={handleBlur('confirmPassword')}
                                       onChangeText={handleChange('confirmPassword')}/>

                        {/* Sign Up Btn */}
                        <TextBtnContained btnText="Sign Up" onPressCallback={handleSubmit}/>
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
                    <Text>Already have an account? {"  "}</Text>
                    <Pressable onPress={() => navigation.navigate("SignIn")}>
                        <Text style={styles.redirectText}>Sign In</Text>
                    </Pressable>
                </RedirectText>
            </FormFooter>
        </AuthLayout>
    )
}

export default CreateAccount

