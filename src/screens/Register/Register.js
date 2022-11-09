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

const Register = ({navigation}) => {
    const [isCheck, setIsCheck] = useState(false);
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
               
               <KeyboardAwareScrollView showVerticalScrollIndicator={false} showHorizontalScrollIndicator={false}>
               <View style={{ flexDirection:"row"}}>
                 <TextInputWithLabel label="First Name" placeholder="Enter First Name" 
                 inputStyle={{flex:1}}
                 />  
                 <View style={{ marginHorizontal: moderateScale(8)}}/>
                 <TextInputWithLabel label="Last Name" placeholder="Enter Last Name" 
                 inputStyle={{flex:1}}
                 />
                </View> 
              
              <TextInputWithLabel label="Date of Birth" placeholder="Enter DOB" 
              inputStyle={{ marginVertical : moderateVerticalScale(28)}}/>

              <TextInputWithLabel label="Phone Number" placeholder="Enter Phone Number" 
              inputStyle={{ marginVertical : moderateVerticalScale(28)}}/>

              <TextInputWithLabel label="Email" placeholder="Enter Email Address"
              keyboardType= "email-address" 
              inputStyle={{ marginVertical : moderateVerticalScale(28)}}/>
              
              <View style={{ flexDirection:"row"}}>
                 <TextInputWithLabel label="State" placeholder="Enter State" 
                 inputStyle={{flex:1}}
                 />  
                 <View style={{ marginHorizontal: moderateScale(8)}}/>
                 <TextInputWithLabel label="Pin Code" placeholder="Enter Pincode" 
                 keyboardType="numeric"
                 inputStyle={{flex:1}}
                 />
              </View>               
              
              <TextInputWithLabel label="Address" placeholder="Enter Address" 
              inputStyle={{ marginVertical : moderateVerticalScale(28)}}/>

              <View style={styles.bottomView}>
                <TouchableOpacity activeOpacity={0.8} onPress={handleCheck}>
                  <Image source={isCheck ? imagePath.checkDone : imagePath.check} 
                  style={{
                    width:40, 
                    height:40,
                    backgroundColor: isCheck ? Colors.themeColor : "white", 
                    marginRight: moderateScale(12)}}
                  />
                </TouchableOpacity>
                <Text>By logging in, you are aggreeing to NannyFinder's Privacy Policy and Terms of Use</Text>
              </View>

               <ButtonComp 
               onPress = {()=> navigation.navigate(navigationStrings.SET_PASSWORD)}
               btnText= {'Continue'}
               btnStyle={{
                marginVertical: moderateVerticalScale(32),
                marginBottom : moderateVerticalScale(24),
               }}/>
              </KeyboardAwareScrollView >
            </View>
        </SafeAreaView>
    );
};

export default Register;
