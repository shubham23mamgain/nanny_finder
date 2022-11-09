import {StyleSheet} from "react-native";
import {scale, verticalScale, moderateScale , moderateVerticalScale} from "react-native-size-matters";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"space-between",
        paddingHorizontal: moderateScale(24),
        alignItems:"center",
    },
    imgStyle:{
        height: moderateScale(160),
        width: moderateScale(160),
        justifyContent:"center",
        alignItems:"center",
    },
    headingText:{
        fontSize: scale(20),
        textTransform:"uppercase",
        fontWeight:"bold",
        textAlign : "center",
    },
    textStyle:{
        fontSize: scale(20),
        fontWeight:"600",
        marginTop: moderateScale(16),
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