import React from "react"
import { Text } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import DrinksScreen from "../screens/Drinks/DrinksScreen"
import FiltersScreen from "../screens/Filters/FiltersScreen"

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="DrinksScreen"
      component={DrinksScreen}
      options={() => ({
        headerTitle: "Drinks",
        headerTitleStyle:{
          fontWeight: "bold",
          fontSize: 24,
        }

      })}
    />
    <Stack.Screen
      name="FiltersScreen"
      component={FiltersScreen}
      options={() => ({
        headerTitle: "Filters",
        headerTitleStyle:{
          fontWeight: "bold",
          fontSize: 24,
        }
      })}
    />
  </Stack.Navigator>
)

export default Navigator
