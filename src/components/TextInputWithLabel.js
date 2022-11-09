import React from 'react';
import { View, Text, StyleSheet , TouchableOpacity, Image, TextInput} from 'react-native';
import {scale, verticalScale, moderateVerticalScale,moderateScale} from "react-native-size-matters";;
import Colors from "../constants/colors";

const TextInputWithLabel = ({
    label,placeholder,rightIcon, onPressRight,onChangeText = ()=> {}, inputStyle = {} , ...props
}) => {
    return (
      <View style={{ ...styles.inputStyle, ...inputStyle }}>
        <Text style={styles.labelTextStyle}>{label}</Text>
        <View style={styles.flexView}>
            <TextInput placeholder={placeholder} style={styles.inputTextStyle} {...props}/>
            {!!rightIcon?<TouchableOpacity onPress={onPressRight} activeOpacity={0.8} >
               <Image style={{tintColor: Colors.blackOpacity30}} source={rightIcon}/>
            </TouchableOpacity> : null}
            
        </View>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
     inputStyle: { 
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderColor,
        borderRadius: moderateScale(4),
    },
    flexView:{ 
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    labeTextStyle:{
        fontSize: scale(14),
        color: Colors.themeColor,  
    },
    inputTextStyle:{
        fontSize: scale(16),
        color: Colors.blackOpacity80,
        paddingVertical : moderateVerticalScale(8),
        flex:1,
    },
});

//make this component available to the app
export default TextInputWithLabel;
