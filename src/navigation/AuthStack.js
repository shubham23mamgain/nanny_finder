import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
      Login, Register, Home, SetPassword, ChangePassword, 
      ForgetPassword, ChooseAccount, Profile, Booking, TabRoutes
    } 
    from "../screens";
import navigationStrings from "../constants/navigationStrings";
const Stack = createNativeStackNavigator();
export default function AuthStack(){
    return(
        <NavigationContainer>
          <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login}/>
            <Stack.Screen name={navigationStrings.REGISTER} component={Register}/>
            <Stack.Screen name={navigationStrings.SET_PASSWORD} component={SetPassword}/>
            <Stack.Screen name={navigationStrings.CHANGE_PASSWORD} component={ChangePassword}/>
            <Stack.Screen name={navigationStrings.FORGET_PASSWORD} component={ForgetPassword}/>
            <Stack.Screen name={navigationStrings.CHOOSE_ACCOUNT} component={ChooseAccount}/>
            <Stack.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes} />
              
          </Stack.Navigator>
        </NavigationContainer>
        
    ) 
};