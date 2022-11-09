import {StyleSheet} from "react-native";
import {scale, verticalScale, moderateScale , moderateVerticalScale} from "react-native-size-matters";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(24),
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
    bottomView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginVertical: moderateScale(24),
    }
});

export default styles;