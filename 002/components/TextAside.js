import { StyleSheet, View, Text } from "react-native";

import EXP from "./textAside/EXP";
import Rules from "./textAside/Rules";

export default function TextAside() {
  return (
    <View style={styles.container}>
      <EXP />
      <Rules />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
