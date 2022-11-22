import { View } from "react-native";

import DateRow from "./DateRow";

import { getNestedDates } from "../../utils/calendar";

export default function DayRow({
  dates,
  selectedDate,
  onPress,
  monthMap,
  selectedRow,
  CType,
}) {
  const nestedDates = getNestedDates(dates);

  return (
    <>
      {nestedDates.map((row, rowIdx) => {
        return (
          <View key={rowIdx + "row"}>
            <DateRow
              row={row}
              rowIdx={rowIdx}
              onPress={onPress}
              monthMap={monthMap}
              selectedDate={selectedDate}
              selectedRow={selectedRow}
              CType={CType}
            />
          </View>
        );
      })}
    </>
  );
}
