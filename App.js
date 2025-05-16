import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BookListLayout from "./src/BookListLayout";
import BookDetailLayout from "./src/BookDetailLayout";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BookList"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="BookList" component={BookListLayout} />
        <Stack.Screen name="BookDetail" component={BookDetailLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
