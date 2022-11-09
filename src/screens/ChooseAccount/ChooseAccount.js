import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import HeaderComp from "../../components/HeaderComp";
import imagePath from "../../constants/imagePath";
import {moderateScale, moderateVerticalScale} from "react-native-size-matters";
import ButtonComp from "../../components/ButtonComp";
import navigationStrings from "../../constants/navigationStrings";
import styles from "./styles";

const ChooseAccount = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{ 
                paddingVertical : moderateVerticalScale(24),
                paddingHorizontal: moderateScale(24) ,
            }}>
                <HeaderComp />
            </View>
           
            <View style={styles.container}>
               <Text style={styles.headingText}>Choose Your Account Type</Text>

               <View style={{alignItems:"center"}}>
                 <Image 
                 source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfe_SMI-G30qThr8wqRhIIxZEYdURfDM90OQ&usqp=CAU"}}
                 style={styles.imgStyle}
                 />
                 <Text style={styles.textStyle}>Agency</Text>
               </View>

                <View style={{alignItems:"center"}}>
                 <Image 
                 source={{uri:"https://cdn-icons-png.flaticon.com/512/180/180678.png"}}
                 style={styles.imgStyle}
                 />
                 <Text style={styles.textStyle}>Freelancer</Text>
               </View>
            
               <ButtonComp 
               onPress = {()=> navigation.navigate(navigationStrings.REGISTER)}
               btnText= 'Continue'
               btnStyle={{
                width:"100%",
                marginBottom: moderateScale(24),
               }}/>
            </View>
        </SafeAreaView>
    );
};

export default ChooseAccount;
