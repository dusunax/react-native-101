import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ onDeleteItem, text, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteItem.bind(this, id)}
        android_ripple={{ color: "#1C6758" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>할 일: {text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 8,
    borderRadius: 6,

    backgroundColor: "#fff",
    shadowColor: "#D6CDA4",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    elevation: 5,

    overflow: "hidden",
  },
  pressedItem: {
    backgroundColor: "#1C6758",
  },
  goalText: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
