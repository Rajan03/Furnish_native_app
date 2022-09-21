import {useState} from "react";
import {View, Pressable, Text, Image} from "react-native";
import * as Yup from "yup";
import {Formik} from "formik";
import {FontAwesome} from "@expo/vector-icons";

import {InputWithIcon, TextBtnContained} from "../../components";
import {ForgotPasswordStyles as styles} from './Auth.styles'
import AuthLayout from "./Auth.Layout";
import {ForgotPassword} from "../../../constants/Images";

// Validation Schema for Forgot Password Form
const validationSchema = Yup.object().shape({
    email: Yup.string().required('Required!').email('Invalid email').label("Email"),
});

const ForgotPasswordScreen = ({navigation}) => {
    const [loading, setLoading] = useState(false);

    const handleResetPassword = async () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    return (
        <AuthLayout>
            {/* Header and Back btn*/}
            <View style={styles.header}>
                {/* Back Icon */}
                <Pressable style={styles.goBackIcon} onPress={() => navigation.navigate('SignIn')}>
                    <FontAwesome name="chevron-left" size={24} color="black"/>
                </Pressable>

                {/* Header Text */}
                <Text style={styles.headerText}>Forgot Password</Text>
            </View>

            {/* Illustration */}
            <View style={styles.illustrationContainer}>
                <Image source={ForgotPassword} style={styles.illustrationImage}/>

                <Text style={styles.illustrationText}>Enter your email address to reset your password</Text>
            </View>

            {/* Forgot Password Form */}
            <View style={styles.form}>
                <Formik initialValues={{email: ''}}
                        onSubmit={handleResetPassword}
                        validationSchema={validationSchema}>
                    {({
                          handleChange, handleSubmit, errors,
                          setFieldTouched, values, touched
                      }) => (
                        <>
                            <View>
                                <InputWithIcon
                                    icon={"envelope"}
                                    placeholder="Email"
                                    value={values.email}
                                    error={(touched.email && errors.email) ? errors.email : ''}
                                    onBlur={() => setFieldTouched('email')}
                                    onChangeText={handleChange('email')}
                                />
                            </View>
                            {/* Reset Password Btn */}
                            <View style={styles.signUpBtn}>
                                <TextBtnContained
                                    btnText="Reset Password"
                                    onPressCallback={handleSubmit}
                                />
                            </View>
                        </>
                    )}
                </Formik>

                <Text style={styles.instructions}>
                    Please provide a valid email as we will send you an email with an OTP that you can use to reset your password
                </Text>
            </View>
        </AuthLayout>
    );
}
export default ForgotPasswordScreen;
