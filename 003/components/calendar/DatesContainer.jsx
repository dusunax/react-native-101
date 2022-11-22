import { Dimensions, StyleSheet, Text, View } from "react-native";

import Animated, { useAnimatedStyle } from "react-native-reanimated";

import DateRow from "./DateRow";

import { getNestedDates } from "../../utils/calendar";
import { useEffect } from "react";

export default function DayRow({
  dates,
  selectedDate,
  onPress,
  monthMap,
  selectedRow,
  CType,
}) {
  const nestedDates = getNestedDates(dates);
  const isRowSelected = selectedRow !== null ? selectedRow : -1;

  // 버그 확인용
  // useEffect(() => {
  //   console.log(CType.value);
  // }, []);
  const { width: PAGE_WIDTH } = Dimensions.get("window");
  const contentsArea = PAGE_WIDTH - 32;

  return (
    <>
      {nestedDates.map((row, rowIdx) => {
        const isRowActive = isRowSelected + 1 === rowIdx ? true : false;
        let rowIdxOffset = rowIdx - selectedRow;

        if (rowIdxOffset < selectedRow) {
        }
        console.log(rowIdxOffset);

        const rStyle = useAnimatedStyle(() => {
          // 버그 체크용 콘솔
          // console.log(
          //   `isWeekly는 ${
          //     CType.value === "weekly"
          //   }이다. isRowActive는 ${isRowActive}이다. 따라서 row는 ${
          //     CType.value === "weekly" && isRowActive
          //   }이다. 선택된 줄: ${isRowSelected}`
          // );
          let weekly = CType.value === "weekly";
          let showThisRow = weekly && isRowActive;

          return {
            backgroundColor: "#fff",
            maxHeight: !weekly || showThisRow ? 50 : 0,
            flexDirection: "column",
            flexWrap: "nowrap",
            transform: [
              // { translateX: weekly ? contentsArea * rowIdxOffset : 0 },
            ],
            // borderWidth: showThisRow ? 1 : 0,
          };
        });

        return (
          <View key={rowIdx + "row"}>
            <DateRow
              row={row}
              rowIdx={rowIdx}
              onPress={onPress}
              monthMap={monthMap}
              selectedDate={selectedDate}
              rowStyle={rStyle}
            />
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  test: {
    backgroundColor: "blue",
  },
});
