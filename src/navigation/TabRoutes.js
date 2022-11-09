import * as React from "react";
import {Text, View , Image} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home , Profile , Booking } from "../screens";
import navigationStrings from "../constants/navigationStrings";
import imagePath from "../constants/imagePath";
import Colors from "../constants/colors";
const BottomTab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
            <BottomTab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarInactiveTintColor: Colors.blackOpacity50,
                tabBarActiveTintColor: Colors.themeColor,
            }}
            >
                <BottomTab.Screen name= {navigationStrings.HOME}  
                component={Home}
                options={{
                    tabBarIcon : ({ focused} ) => {
                       return (
                        <Image style={{
                            tintColor: focused ? Colors.themeColor : Colors.blackOpacity50,
                            width:24, height:24}} source={imagePath.home}/>
                       )
                    }
                }}
                />
                <BottomTab.Screen name="Booking" component={Booking}
                 options={{
                    tabBarIcon : ({ focused} ) => {
                       return (
                        <Image style={{
                            tintColor: focused ? Colors.themeColor : Colors.blackOpacity50,
                            width:24, height:24}} source={imagePath.booking}/>
                       )
                    }
                }}
                />
                <BottomTab.Screen name="Profile" component={Profile}
                 options={{
                    tabBarIcon : ({ focused} ) => {
                       return (
                        <Image style={{
                            tintColor: focused ? Colors.themeColor : Colors.blackOpacity50,
                            width:24, height:24}} source={imagePath.profile}/>
                       )
                    }
                }}
                />
            </BottomTab.Navigator>
    ) 
}