import {useState} from "react";
import * as Yup from "yup";
import {FontAwesome} from "@expo/vector-icons";

import {ForgotPassword} from "../../../constants/Images";
import {FormikForm, InputWithIcon, TextBtnContained} from "../../components";
import AuthLayout from "./Auth.Layout";
import {
    BackBtn,
    FooterMsgText,
    FormHeaderText,
    ForgotPasswordStyleSheet as styles,
    ForgotPswFooter,
    FormGroup,
    ImageContainer,
    ImageStyles
} from "./Auth.styles";

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
            navigation.navigate('OtpScreen');
        }, 8000);
    }

    return (
        <AuthLayout withKeyboardAvoidance>
            {/* Go Back Icon */}
            <BackBtn onPress={() => navigation.goBack()}>
                <FontAwesome name="chevron-left" size={24} color="black"/>
            </BackBtn>

            {/* Illustration */}
            <ImageContainer>
                <ImageStyles resizeMode={"contain"} source={ForgotPassword}/>
            </ImageContainer>

            {/* Forgot Password Form */}
            <FormikForm initialState={{email: ''}}
                        onSubmit={handleResetPassword}
                        validationSchema={validationSchema}>
                {({handleChange, handleSubmit, errors, setFieldTouched, values, touched}) => (
                    <FormGroup>
                        <FormHeaderText>Enter your email address to reset your
                            password</FormHeaderText>

                        <InputWithIcon
                            icon={"envelope"}
                            placeholder="Email"
                            style={styles.input}
                            value={values.email}
                            editable={!loading}
                            error={(touched.email && errors.email) ? errors.email : ''}
                            onBlur={() => setFieldTouched('email')}
                            onChangeText={handleChange('email')}
                        />

                        {/* Reset Password Btn */}
                        <TextBtnContained disabled={loading} btnText="Reset Password"
                                          onPressCallback={() => navigation.navigate('OtpScreen')}/>
                    </FormGroup>
                )}
            </FormikForm>

            <ForgotPswFooter>
                <FooterMsgText>
                    Please provide a valid email as we will send you an email with an OTP that you can use to reset your
                    password
                </FooterMsgText>
            </ForgotPswFooter>
        </AuthLayout>
    );
}
export default ForgotPasswordScreen;
