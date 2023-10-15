import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { firstPage, mainPage, startPage } from "./Screens";

const AuthStack = createStackNavigator();

const MainStack = createStackNavigator();

export default () => (

    <NavigationContainer>
        <MainStack.Navigator>
            <MainStack.Screen
                name="firstPage"
                component={firstPage}
            />
        </MainStack.Navigator>
    </NavigationContainer>

);
