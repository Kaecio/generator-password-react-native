import React from "react";
import { TextInput } from "react-native";
import { styles } from "./style";

interface BatTextInputProps {
  pass: string;
}

export default function BatTextInput(props: BatTextInputProps) {
  return (
    <TextInput placeholder="pass" style={styles.textInput} value={props.pass} />
  );
}
