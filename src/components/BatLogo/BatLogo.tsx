import React from "react";
import { View, Text, Image } from "react-native";
import batlogo from "../../../assets/image/batlogo.png";
import { styles } from "./style";

export default function BatLogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BAT PASS GENERATOR</Text>
      <Image
        source={batlogo}
        style={{
          resizeMode: "contain",
          height: 180,
        }}
        alt="batlogo"
      />
    </View>
  );
}
