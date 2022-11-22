import { StyleSheet, Text, View } from "react-native";

import DateRow from "./DateRow";

import { getNestedDates } from "../../utils/calendar";

export default function DayRow({
  dates,
  selectedDate,
  onPress,
  monthMap,
  calenderType,
  selectedRow,
  rStyle,
}) {
  const nestedDates = getNestedDates(dates);
  const currentRow =
    calenderType === 1 && selectedRow !== null ? selectedRow : -1;

  return (
    <>
      {nestedDates.map((row, rowIdx) => {
        const isOn = currentRow + 1 === rowIdx ? "on" : "off";
        // const rowData = { type: calenderType, on: isOn, idx: rowIdx };

        let rowStyle = [];
        calenderType === 1 && isOn === "off"
          ? rowStyle.push(styles.unSelected)
          : "";
        // console.log(rowData.on, [styles.row, rowStyle]);

        return (
          <DateRow
            key={rowIdx + "row"}
            row={row}
            rowIdx={rowIdx}
            onPress={onPress}
            monthMap={monthMap}
            selectedDate={selectedDate}
            rowStyle={rowStyle}
            rStyle={rStyle}
          />
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "blue",
    alignSelf: "center",
  },
  box: {
    height: 50,
    backgroundColor: "red",
  },
  unSelected: {
    backgroundColor: "blue",
    // height: 0,
    // translateX: '',

    overflow: "hidden",
  },
});
