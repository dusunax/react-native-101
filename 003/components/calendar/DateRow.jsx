import { StyleSheet, View, Pressable } from "react-native";

import Cell from "./Cell";

import { Colors } from "../../constants/colors";
import { getIsMonth } from "../../utils/calendar";

export default function DayRow({
  row,
  rowIdx,
  selectedDate,
  onPress,
  monthMap,
  rowStyle,
  rStyle,
}) {
  return (
    <Pressable>
      <View style={[styles.row, rowStyle]} key={rowIdx + "low"}>
        {row.map((cell, cellIdx) => {
          let style = [];
          let textStyle = [];
          let currOnPress = null;

          const { isPrevMonth, isNextMonth } = getIsMonth(
            rowIdx,
            cellIdx,
            monthMap
          );

          if (isPrevMonth) {
            textStyle.push(styles.isNotThisMonth);
          } else if (isNextMonth) {
            textStyle.push(styles.isNotThisMonth);
          } else {
            cell === selectedDate ? style.push(styles.selected) : "";
            currOnPress = onPress.bind(this, cell, rowIdx);
          }

          return (
            <Cell
              key={"cell" + row + cell}
              style={style}
              textStyle={textStyle}
              onPress={currOnPress}
            >
              {cell}
            </Cell>
          );
        })}
      </View>
    </Pressable>
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
