import {StyleSheet} from "react-native";
import {scale, verticalScale, moderateScale , moderateVerticalScale} from "react-native-size-matters";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgStyle:{
        height: moderateScale(220),
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    headerText:{
        fontSize: scale(20),
        fontWeight:"bold",
        color: Colors.themeColor,
        textTransform : "uppercase",
    },
    headerStyle:{
        flexDirection:"row",
        backgroundColor: Colors.white,
        paddingVertical : moderateVerticalScale(36),
        shadowColor: 'lightgrey',
        shadowOffset: {
            width:4,
            height:6,
        },
        shadowOpacity:0.2,
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal : moderateScale(16),
    },
    flexView:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: 'center',
    },
    flatStyle:{
        shadowColor:'#000',
        backgroundColor: 'lightgrey',
        shadowOffset : {width:0, height:6},
        shadowOpacity : 0.2,
        padding: moderateScale(16),
        borderRadius : moderateScale(4),
        margin: moderateScale(2),
    },
   
});

export default styles;