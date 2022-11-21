import { StyleSheet, View, Text } from "react-native";

import Calendar from "../components/calendar/Calendar";

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Calendar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,

    flex: 1,
  },
});
