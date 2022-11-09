import {StyleSheet} from "react-native";
import {scale, verticalScale, moderateScale , moderateVerticalScale} from "react-native-size-matters";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(24),
    },
    headingText:{
        fontSize: scale(24),
        fontWeight:"bold",
        textAlign : "center",
        marginTop: moderateVerticalScale(54),
    },
    subHeadingText:{
        fontSize: scale(13),
        fontWeight:"300",
        textAlign:"center",
        marginTop: moderateVerticalScale(24),
    },
});

export default styles;