import { StyleSheet, View, Text, FlatList } from "react-native";

import TextBox from "./calcBoard/TextBox";

export default function CalcBoard(props) {
  const { nums, signs, expect } = props;

  return (
    <View style={styles.container}>
      {/* <FlatList
        style={styles.container}
        data={[0, 0]}
        renderItem={() => {
          return <TextBox text="00" />;
        }}
        keyExtractor={(item, index) => {
          return index;
        }}
      /> */}

      <TextBox text={nums[0]} />
      <TextBox text={signs[0]} />
      <TextBox text={nums[1]} />
      <TextBox text={signs[1]} />
      <TextBox text={nums[2]} />

      <Text style={styles.equal}>=</Text>
      <Text style={styles.equal}>{expect}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 6,

    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",

    backgroundColor: "#ccc",
  },
  equal: {
    marginHorizontal: 8,

    fontSize: 36,
  },
});
