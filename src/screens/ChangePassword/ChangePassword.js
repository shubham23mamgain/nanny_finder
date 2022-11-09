import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import HeaderComp from "../../components/HeaderComp";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import {scale, verticalScale, moderateVerticalScale,moderateScale} from "react-native-size-matters";
import imagePath from "../../constants/imagePath";
import ButtonComp from "../../components/ButtonComp";
import navigationStrings from "../../constants/navigationStrings";
import styles from "./styles";
import Colors from "../../constants/colors";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ChangePassword = ({navigation}) => {
    const [isVisible, setIsVisible] = useState(true);
    
    const handleCheck = ()=> {
       setIsCheck(!isCheck)
    }
    return (
        <SafeAreaView style={{flex:1}}> 
            <View style={styles.container}>  
            <View style={{ 
                paddingVertical : moderateVerticalScale(24),
            }}>
                <HeaderComp />
            </View>  
               
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>

              <Text style={styles.headingText}> Change Password </Text>  
              <Text style={styles.subHeadingText}>Change password for your account </Text> 

              <TextInputWithLabel label="OTP" placeholder="Enter OTP Sent to email" 
              inputStyle= {{ 
                marginVertical : moderateVerticalScale(26)
              }}
              />

              <TextInputWithLabel label="New Password" placeholder="Enter your new Password" 
              secureTextEntry={isVisible} 
              rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye} 
              onPressRight={()=> setIsVisible(!isVisible)}
              inputStyle= {{ 
                marginVertical : moderateVerticalScale(26)
              }}
              />
              <TextInputWithLabel label="Confirm Password" placeholder="Confirm your Password" 
              secureTextEntry={isVisible} 
              rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye} 
              onPressRight={()=> setIsVisible(!isVisible)}
              inputStyle= {{ 
                marginVertical : moderateVerticalScale(26)
              }}
              />
              
               <ButtonComp 
               onPress = {()=> navigation.navigate(navigationStrings.LOGIN)}
               img = {imagePath.forward}
               btnStyle={{
                width: moderateScale(56),
                height:moderateScale(56),
                borderRadius:moderateScale(28),
                alignSelf:"flex-end",
               }}/>
              </KeyboardAwareScrollView >
            </View>
        </SafeAreaView>
    );
};

export default ChangePassword;
