import { StyleSheet, View, Text } from "react-native";

import Cell from "./Cell";

import { selectLangDays } from "../../utils/selectLanguge";
import { Colors } from "../../constants/colors";

export default function DayRow({ lang }) {
  let days = selectLangDays(lang);

  return (
    <View style={styles.row}>
      {days.map((day, idx) => {
        let currStyle = [styles.dayCell];
        if (day === "Sun") currStyle.push(styles.sun);
        if (day === "Sat") currStyle.push(styles.sat);

        return (
          <Cell key={day + idx} style={currStyle} onPress={null}>
            {day}
          </Cell>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dayCell: {
    minHeight: 30,
    lineHeight: 30,
  },
  sun: {
    color: Colors.days.sun,
  },
  sat: {
    color: Colors.days.sat,
  },
});
