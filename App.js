import React from "react"
import { Provider } from "react-redux"
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { store } from "./src/redux/store"
import Navigator from "./src/Navigation/Navigator"

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  </Provider>
)

export default App
