import { StyleSheet, View, TextInput } from "react-native";

export default function TextBox(props) {
  return <TextInput style={styles.input} defaultValue={props.text} />;
}

const styles = StyleSheet.create({
  input: {
    width: 40,
    height: 40,
    margin: 4,

    fontSize: 20,
    lineHeight: 40,

    textAlign: "center",
    backgroundColor: "#eee",
  },
});
