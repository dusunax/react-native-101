import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Calendar() {
  return (
    <View>
      <View style={styles.calendarTitle}>
        <Pressable>
          <Text>&lt;</Text>
        </Pressable>

        <Text>Month Year</Text>

        <Pressable>
          <Text>&gt;</Text>
        </Pressable>
      </View>

      <Pressable>
        <View style={styles.datesRow}>
          <View style={styles.days}>
            <Text>Sun</Text>
          </View>
          <View style={styles.days}>
            <Text>Mon</Text>
          </View>
          <View style={styles.days}>
            <Text>Tue</Text>
          </View>
          <View style={styles.days}>
            <Text>Wed</Text>
          </View>
          <View style={styles.days}>
            <Text>Thu</Text>
          </View>
          <View style={styles.days}>
            <Text>Fri</Text>
          </View>
          <View style={styles.days}>
            <Text>Sat</Text>
          </View>
        </View>

        <View style={styles.datesRow}>
          <View style={styles.dates}>
            <Text>1</Text>
          </View>
          <View style={styles.dates}>
            <Text>2</Text>
          </View>
          <View style={styles.dates}>
            <Text>3</Text>
          </View>
          <View style={styles.dates}>
            <Text>4</Text>
          </View>
          <View style={styles.dates}>
            <Text>5</Text>
          </View>
          <View style={styles.dates}>
            <Text>6</Text>
          </View>
          <View style={styles.dates}>
            <Text>7</Text>
          </View>
        </View>

        <View style={styles.datesRow}>
          <View style={styles.dates}>
            <Text>1</Text>
          </View>
          <View style={styles.dates}>
            <Text>2</Text>
          </View>
          <View style={styles.dates}>
            <Text>3</Text>
          </View>
          <View style={styles.dates}>
            <Text>4</Text>
          </View>
          <View style={styles.dates}>
            <Text>5</Text>
          </View>
          <View style={styles.dates}>
            <Text>6</Text>
          </View>
          <View style={styles.dates}>
            <Text>7</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  calendarTitle: {
    backgroundColor: "#eee",
    height: 40,

    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
  },
  datesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  days: {
    flex: 1,
    minHeight: 30,

    justifyContent: "center",
    alignItems: "center",
  },
  dates: {
    flex: 1,
    minHeight: 50,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "blue",
  },
});
