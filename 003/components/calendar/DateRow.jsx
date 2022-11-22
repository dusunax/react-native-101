import { StyleSheet, View, Pressable, Dimensions } from "react-native";

import Animated, { useAnimatedStyle } from "react-native-reanimated";

import Cell from "./Cell";

import { Colors } from "../../constants/colors";
import { getIsMonth } from "../../utils/calendar";

export default function DayRow({
  row,
  rowIdx,
  idxMove,
  onPress,
  monthMap,
  selectedDate,
  selectedRow,
  CType,
}) {
  const rowIdxOffset = rowIdx - selectedRow;

  const { width: PAGE_WIDTH } = Dimensions.get("window");
  const contentsArea = PAGE_WIDTH - 32;

  const rStyle = useAnimatedStyle(() => {
    let weekly = CType.value === "weekly";

    return {
      flexDirection: "row",
      flexWrap: "wrap",
      transform: [
        {
          translateX: weekly
            ? contentsArea * (rowIdxOffset + idxMove.value)
            : 0,
        },
        { translateY: weekly ? -50 * (rowIdx - 1) : 0 },
      ],
    };
  });

  return (
    <Pressable>
      <Animated.View style={rStyle} key={rowIdx + "low"}>
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
      </Animated.View>
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
