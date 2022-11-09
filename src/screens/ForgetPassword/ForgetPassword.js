import React, {useState,useEffect} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, Keyboard  } from 'react-native';
import HeaderComp from "../../components/HeaderComp";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import {scale, verticalScale, moderateVerticalScale,moderateScale} from "react-native-size-matters";
import imagePath from "../../constants/imagePath";
import ButtonComp from "../../components/ButtonComp";
import navigationStrings from "../../constants/navigationStrings";
import styles from "./styles";
import Colors from "../../constants/colors";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ForgetPassword = ({navigation}) => {
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    useEffect(()=> {
     const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',(event)=> {
        console.log("Event Trigger on keyboard",event);
        setKeyboardHeight(event.endCoordinates.height);
     }); 
     
     const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',(event)=> {
        console.log("Event Trigger on keyboard",event);
        setKeyboardHeight(0);
     }); 
     return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
     }
    },[]);

    return (
        <SafeAreaView style={{flex:1}}> 
          <View style={styles.container}>  
            <View style={{ 
                paddingVertical : moderateVerticalScale(24),
            }}>
                <HeaderComp />
            </View>  

            <View style={{flex:1}}>
               <View style={{flex:0.2,alignItems:"center", justifyContent:"center"}}>
                <Image style={styles.logo} 
                source={{uri:"https://cdn.pixabay.com/photo/2017/06/22/10/04/lock-2430207_1280.png"}} 
                />
            </View>

            <View style={{flex:0.3 , marginBottom: moderateVerticalScale(40)}}>
              <Text style={styles.headingText}> Forgot Password </Text>  
              <Text style={styles.subHeadingText}>Enter the email address associated with your account.</Text> 
            </View>

            <View style={{flex:0.3, marginBottom : keyboardHeight - moderateScale(250)}}>
               <TextInputWithLabel label="Email" placeholder="Enter your email"
                keyboardType="email-address"
                inputStyle= {{ marginVertical : moderateVerticalScale(20)}}
               />
              
               <ButtonComp 
                onPress = {()=> navigation.navigate(navigationStrings.CHANGE_PASSWORD)}
                btnText='Send'
               />
            </View>
    
            </View>   
             
          </View>
        </SafeAreaView>
    );
};

export default ForgetPassword;
