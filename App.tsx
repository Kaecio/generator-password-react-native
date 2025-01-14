import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home/Home";
import BatLogo from "./src/components/BatLogo/BatLogo";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
