import React from 'react';
import {useNavigation} from "@react-navigation/native";
import { View, Text, StyleSheet , Image, TouchableOpacity } from 'react-native';
import {moderateScale } from "react-native-size-matters";
import imagePath from "../constants/imagePath"
const HeaderComp = ({
    onPressBack
}) => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
             onPress = {!!onPressBack ? onPressBack : () => goBack()}
            >
                <Image source={imagePath.myback} style={{
                    width:40,height:40
                }}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems:"center",
        height: moderateScale(42),
    },
});

export default HeaderComp;
