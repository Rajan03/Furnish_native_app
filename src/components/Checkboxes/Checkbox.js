import React from 'react';
import {Pressable} from 'react-native';
import {Feather} from '@expo/vector-icons';

const CheckBox = ({checked, onChange}) => {
    return (
        <Pressable onPress={() => onChange(!checked)}>
            {checked
                ? <Feather name="check-square" size={20} color="#000"/>
                : <Feather name="square" size={20} color="#000"/>}
        </Pressable>
    );
};

export default CheckBox;


