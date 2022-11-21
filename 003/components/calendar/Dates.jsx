import { StyleSheet, View, Text, Pressable } from "react-native";

import Cell from "./Cell";

import { Colors } from "../../constants/colors";
import { getNestedDates } from "../../utils/calendar";

export default function DayRow({ dates, selectedDate, onPress, monthMap }) {
  let nestedDates = getNestedDates(dates);
  const { monthStartMap, monthEndMap } = monthMap;

  return (
    <>
      {nestedDates.map((row, rowIdx) => (
        <View style={styles.row}>
          {row.map((cell, cellIdx) => {
            let style = [];

            // monthStartMap보다 row가 같거나 작고, cell이 작을 때
            const isPrevMonth =
              rowIdx < monthStartMap.row && cellIdx < monthStartMap.cell;

            // monthEndMap보다 row가 같거나 크고, cell이 클 때
            const isNextMonth =
              rowIdx > monthEndMap.row && cellIdx > monthEndMap.cell;

            if (isPrevMonth) {
              style.push(styles.isNotThisMonth);
            } else if (isNextMonth) {
              style.push(styles.isNotThisMonth);
            } else {
              cell === selectedDate ? style.push(styles.selected) : "";
            }

            return (
              <Cell
                key={"cell" + row + cell}
                style={style}
                onPress={onPress.bind(this, cell)}
              >
                {cell}
              </Cell>
            );
          })}
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  selected: {
    backgroundColor: Colors.primary,
    borderRadius: 50,
  },
  isNotThisMonth: {
    color: "#aaa",
  },
});
