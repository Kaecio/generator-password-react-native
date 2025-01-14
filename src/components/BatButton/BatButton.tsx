import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./style";
import BatTextInput from "../BatTextInput/TextInput";
import generatePasswordBat from "../../services/passwordService";
import * as Clipboard from "expo-clipboard";

export default function BatButton() {
  const [pass, setPass] = useState("");

  function generatePassword() {
    setPass(generatePasswordBat());
  }

  function handleCopyPassword() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BatTextInput pass={pass} />
      <Pressable onPress={generatePassword} style={styles.button}>
        <Text style={styles.buttonText}>Generate</Text>
      </Pressable>
      <Pressable onPress={handleCopyPassword} style={styles.button}>
        <Text style={styles.buttonText}>Copy</Text>
      </Pressable>
    </View>
  );
}
