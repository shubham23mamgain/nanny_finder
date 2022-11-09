import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import {scale, moderateScale} from "react-native-size-matters";
import Colors from "../constants/colors";
const ButtonComp = ({
    btnText , 
    btnStyle = {},
    btnTextStyle = {},
    img,
    
    onPress = ()=> {}
}) => {
    return (
        <TouchableOpacity 
        activeOpacity={0.8}
        onPress={onPress}
        style={{...styles.btnStyle, ...btnStyle}}>
            {!!img ? <Image source={img} style={{ tintColor: 'white' }}/> : 
            <Text style={{...styles.btnTextStyle, ...btnTextStyle}}>{btnText}</Text>
            }
            
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnStyle: {
       height: moderateScale(40),
       backgroundColor: Colors.themeColor,
       borderRadius: moderateScale(4),
       alignItems:"center",
       justifyContent:"center",
    },
    btnTextStyle:{
        fontSize: scale(12),
        fontWeight:"bold",
        color:"white",
        textTransform :"uppercase",
    }
});

export default ButtonComp;
