import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from "./assets/logo.jpg"; // Tell webpack this JS file uses this image

export default function App() {
  let x = 1;

  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
