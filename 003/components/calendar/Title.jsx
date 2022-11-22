import { StyleSheet, View, Text } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import MonthButton from "../ui/MonthButton";
import { getMonthYear, getMonthYearString } from "../../utils/calendar";

export default function CalendarTitle({ currentDate, lang, onPress }) {
  const monthYear = getMonthYearString(...getMonthYear(currentDate), lang);

  return (
    <View style={styles.calendarTitle}>
      <MonthButton onPress={onPress.bind(this, "prev")}>
        <Ionicons name="chevron-back-outline" size={22} />
      </MonthButton>

      <Text>{monthYear}</Text>

      <MonthButton onPress={onPress.bind(this, "next")}>
        <Ionicons name="chevron-forward-outline" size={22} />
      </MonthButton>
    </View>
  );
}

const styles = StyleSheet.create({
  calendarTitle: {
    height: 40,

    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
  },
  calenderRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
