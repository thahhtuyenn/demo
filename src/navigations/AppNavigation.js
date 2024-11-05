import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Screen_01 } from "../pages/Screen_01";
import { Screen_02_Toolkit } from "../pages/redux-toolkit/Screen_02_Toolkit";
import { Screen_03_Toolkit } from "../pages/redux-toolkit/Screen_03_Toolkit";
import { Screen_02_Saga } from "../pages/redux-saga/Screen_02_Saga";
import { Screen_03_Saga } from "../pages/redux-saga/Screen_03_Saga";
import { Screen_02_Recoil } from "../pages/recoil/Screen_02_Recoil";
import { Screen_03_Recoil } from "../pages/recoil/Screen_03_Recoil";

const Stack = createStackNavigator();

export const AppNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="screen1" component={Screen_01} />
                    {/* Screen for Redux Toolkit */}
                    {/* <Stack.Screen name="screen2" component={Screen_02_Toolkit} />
                    <Stack.Screen name="screen3" component={Screen_03_Toolkit} /> */}

                    {/* Screen for Redux Saga */}
                    {/* <Stack.Screen name="screen2" component={Screen_02_Saga} />
                    <Stack.Screen name="screen3" component={Screen_03_Saga} /> */}

                    {/* Screen for Recoil */}
                    <Stack.Screen name="screen2" component={Screen_02_Recoil} />
                    <Stack.Screen name="screen3" component={Screen_03_Recoil} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

