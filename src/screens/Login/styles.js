import {StyleSheet} from "react-native";
import {scale, verticalScale, moderateScale , moderateVerticalScale} from "react-native-size-matters";
import Colors from "../../constants/colors";

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"space-between"
    },
    imgStyle:{
        height: moderateScale(220),
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    loginText:{
        fontSize: scale(32),
        color: "yellow",
        fontWeight:"bold"
    },
    mainStyle:{
        paddingHorizontal : moderateScale(24),
        paddingTop : moderateVerticalScale(44),
    },
    forgetView: {
        alignSelf:"flex-end", 
        marginVertical : moderateVerticalScale(24)
    },
    forgetText:{
        fontSize:scale(16),
        color: Colors.themeColor,
        fontWeight:"400",
    },
    bottomView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop : moderateScale(72),
        marginBottom : moderateVerticalScale(44),
    }
});

export default styles;