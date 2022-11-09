import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet , Image, FlatList} from 'react-native';
import {scale, verticalScale, moderateScale , moderateVerticalScale} from "react-native-size-matters";
import styles from "./styles";
import Colors from "../../constants/colors";
import data from "./data";
import imagePath from "../../constants/imagePath";
import ButtonComp from "../../components/ButtonComp";

const Home = () => {
    const renderItem= ({item})=> {
       return (
        <View style={styles.flatStyle}>
            <View style={styles.flexView}>
                <View>
                 <Text style={{
                    fontSize: scale(12),
                    color: Colors.blackOpacity80,
                 }}
                 >{!!item?.date ? item.date:'Date Not Found'}</Text>
                 <Text style={{
                    fontSize: scale(14),
                    color: Colors.black,
                    fontWeight:"bold",
                    marginTop : moderateVerticalScale(8),
                 }}>{!!item?.name ? item.name : 'Name not found'}</Text>

                 <View style={{ flexDirection:"row", alignItems:"center"}}>
                   <Image source={imagePath.location} style={{width:moderateScale(24), height:moderateScale(24),
                   tintColor: Colors.blackOpacity50
                }}/>  
                    <View style={{marginRight:moderateScale(8)}}/>
                   <Text style={{ color: Colors.blackOpacity50}}>{!!item?.address ? item.address: 'Address not found'}</Text>
                 </View>
                 
                </View>

                <Image source={{
                    uri: !!item?.imgUrl ? item.imgUrl: 'Image not Found'
                    }}
                  style={{ 
                    height: moderateScale(64), width: moderateScale(64), borderRadius:moderateScale(32)}}
                /> 
            </View>

            <View style={{...styles.flexView, marginVertical: moderateVerticalScale(8)}}>
              <Text style={{
                fontSize: scale(14),
                fontWeight:"bold",
                textTransform:"uppercase",
                color:Colors.blackOpacity50,
              }}>Price</Text>
              <Text style={{
                fontSize: scale(14),
                color: Colors.black,
                fontWeight:"bold",
              }}>{!!item?.price ? item.price : 'Price not found'}</Text>
            </View>

            <View style={styles.flexView}>
                <View style={{flex:1}}>
                    <ButtonComp 
                    btnText="Reject"
                    btnTextStyle = {{
                        color: "black",
                    }}
                    btnStyle={{
                        backgroundColor: Colors.white,
                        color: Colors.themeColor,
                        borderColor : Colors.themeColor,
                    }}/>
                  
                </View>

                <View style={{ marginHorizontal : moderateScale(8)}}/>

                <View style={{flex:1}}>
                  <ButtonComp 
                  btnText="Accept"/>
                </View>
                
            </View>
        </View>
       )
    };
    return (
        <View style={styles.container}>
          <SafeAreaView style={{flex:1,backgroundColor:Colors.white, marginTop : moderateVerticalScale(10)}}>  
            <View style={styles.headerStyle}>
                <Text />
                <Text style={styles.headerText}>Nanny Finders</Text>
               
                <Image source={imagePath.bell}   style={{ width:40, height:40, tintColor: Colors.themeColor}}/>
            </View>
          
            <View style={{flex:1, marginTop : moderateVerticalScale(14), marginHorizontal : moderateScale(16)}}>
                <FlatList 
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                ItemSeparatorComponent = {()=> <View style={{ marginBottom : moderateVerticalScale(16)}}/>}
                />
            </View>
           
          </SafeAreaView>
        </View>
    );
};

export default Home;
