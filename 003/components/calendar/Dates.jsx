import { StyleSheet, View, Text, Pressable } from "react-native";

import Cell from "./Cell";

import { Colors } from "../../constants/colors";
import { getNestedDates } from "../../utils/calendar";

export default function DayRow({ dates, selectedDate, onPress, monthMap }) {
  let nestedDates = getNestedDates(dates);
  const { monthStartMap, monthEndMap } = monthMap;

  const getIsMonth = (rowIdx, cellIdx) => {
    // monthStartMap보다 row가 같거나 작고, cell이 작을 때
    const isPrevMonth =
      rowIdx - 1 <= monthStartMap.row && cellIdx < monthStartMap.cell;

    // monthEndMap보다 row가 같거나 크고, cell이 클 때
    const isNextMonth = rowIdx > monthEndMap.row && cellIdx > monthEndMap.cell;

    return { isPrevMonth, isNextMonth };
  };

  return (
    <>
      {nestedDates.map((row, rowIdx) => (
        <View style={styles.row} key={rowIdx + "low"}>
          {row.map((cell, cellIdx) => {
            let style = [];
            let textStyle = [];

            const { isPrevMonth, isNextMonth } = getIsMonth(rowIdx, cellIdx);

            if (isPrevMonth) {
              textStyle.push(styles.isNotThisMonth);
            } else if (isNextMonth) {
              textStyle.push(styles.isNotThisMonth);
            } else {
              cell === selectedDate ? style.push(styles.selected) : "";
            }

            return (
              <Cell
                key={"cell" + row + cell}
                style={style}
                textStyle={textStyle}
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
    width: 45,
    height: 45,

    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.primary,

    justifyContent: "center",
    alignItems: "center",
  },
  isNotThisMonth: {
    color: "#aaa",
  },
});
