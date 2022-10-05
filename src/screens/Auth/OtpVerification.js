import React, {useState} from 'react';
import {FontAwesome} from "@expo/vector-icons";

import {OTP} from "constants/Images";
import {ScrollableLayout} from "container";
import {OtpInput, TextBtnContained} from "components";
import {ScreenNames} from "constants/ScreenConstants";
import {BackBtn, FormGroup, FormHeaderText, ImageContainer, ImageStyles} from "./Auth.styles";

const OtpVerification = ({navigation}) => {
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');

    const handleOtpChange = (otpNum) => {
        const otpString = `${otp}${otpNum}`;
        setOtp(otpString);

        setOtpError('');
    }
    return (
        <ScrollableLayout withKeyboardAvoidance>
            {/* Go Back Icon */}
            <BackBtn onPress={() => navigation.navigate(ScreenNames.ForgotPassword)}>
                <FontAwesome name="chevron-left" size={24} color="black"/>
            </BackBtn>

            {/* Illustration */}
            <ImageContainer>
                <ImageStyles resizeMode={"contain"} source={OTP}/>
            </ImageContainer>

            <FormGroup>
                <FormHeaderText>
                    Code has been sent to your email address
                </FormHeaderText>

                <OtpInput onOtpInput={handleOtpChange} styles={{marginBottom: 25}}/>

                {/* Reset Password Btn */}
                <TextBtnContained btnText="Verify"
                                  onPressCallback={() => console.log('Done')}/>
            </FormGroup>
        </ScrollableLayout>
    );
};


export default OtpVerification;
