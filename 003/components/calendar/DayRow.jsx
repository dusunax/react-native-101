import { StyleSheet, View, Text } from "react-native";

import Cell from "./Cell";

import { selectLangDays } from "../../utils/selectLanguge";
import { Colors } from "../../constants/colors";

export default function DayRow({ lang }) {
  let days = selectLangDays(lang);

  return (
    <View style={styles.row}>
      {days.map((day, idx) => {
        let textStyle = [];
        if (day === "Sun") textStyle.push(styles.sun);
        if (day === "Sat") textStyle.push(styles.sat);

        return (
          <Cell
            key={day + idx}
            outerStyle={styles.dayCell}
            textStyle={textStyle}
            onPress={null}
          >
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
