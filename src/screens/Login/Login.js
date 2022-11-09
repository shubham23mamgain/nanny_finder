//import liraries
import React, { useState } from 'react';
import { View, Text, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import navigationStrings from "../../constants/navigationStrings";
import {scale, verticalScale, moderateVerticalScale,moderateScale} from "react-native-size-matters";
import styles from "./styles";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import imagePath from "../../constants/imagePath";
import Colors from "../../constants/colors";
import ButtonComp from "../../components/ButtonComp";

const Login = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(true);
    return (
        <View style={styles.container}>
            <View>
              <ImageBackground source={{
              uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXzerAT5kt56bSEWO3tNRCeRp-UWgXzR-46A&usqp=CAU"
            }} 
              style={styles.imgStyle}
            >
                <Text style={styles.loginText}>LOGIN</Text>
            </ImageBackground>
            
            <View style={styles.mainStyle}>

              <TextInputWithLabel label="Email Address" placeholder="Enter your Email Address" 
              keyboardType= "email-address"
              inputStyle={{ marginBottom : moderateVerticalScale(28)}}/>

              <TextInputWithLabel label="Password" placeholder="Enter your Password" 
              secureTextEntry={isVisible} 
              rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye} 
              onPressRight={()=> setIsVisible(!isVisible)}/>

              <TouchableOpacity activeOpacity={0.7} style={styles.forgetView}
              onPress = {() => navigation.navigate(navigationStrings.FORGET_PASSWORD)}
              >
                <Text style={styles.forgetText}>Forgot Password ?</Text>
              </TouchableOpacity>

              <ButtonComp 
              btnText={'Login'}
              onPress = {() => navigation.navigate(navigationStrings.TAB_ROUTES)}
              />
            </View>
            </View>
            

            <View style={styles.bottomView}>
              <Text>Not a Member</Text>
              <TouchableOpacity onPress = {() => navigation.navigate(navigationStrings.CHOOSE_ACCOUNT)}>
                <Text style={{marginLeft: moderateVerticalScale(10), color: Colors.themeColor }}>Join Now</Text>
              </TouchableOpacity>
            </View>
            
        </View>
    );
};

export default Login;
