import {useState} from "react";
import {View, StyleSheet} from "react-native";
import {Screen} from "react-native-screens";
import * as Yup from "yup";
import {Formik} from "formik";
import {InputWithIcon, TextBtnContained} from "../../components";

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Required!').email('Invalid email').label("Email"),
});

const ForgotPasswordScreen = () => {
    const [loading, setLoading] = useState(false);

    const handleResetPassword = async () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    return (
        <Screen style={styles.container}>
            <Formik initialValues={{email: ''}}
                    onSubmit={handleResetPassword}
                    validationSchema={validationSchema}>
                {({handleChange, handleSubmit, errors,
                      setFieldTouched, values, touched}) => (
                    <>
                        <View style={styles.inputContainer}>
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
        </Screen>
    );
}
export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    signUpBtn: {
        justifyContent: "center",
        alignItems: "center",
    },

});
