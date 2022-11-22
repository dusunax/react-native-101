import DateRow from "./DateRow";

import { getNestedDates } from "../../utils/calendar";

export default function DayRow({
  dates,
  selectedDate,
  onPress,
  onSwitchMode,
  monthMap,
  calenderType,
  selectedRow,
}) {
  const nestedDates = getNestedDates(dates);
  const currentRow =
    calenderType === 1 && selectedRow !== null ? selectedRow : -1;

  return (
    <>
      {nestedDates.map((row, rowIdx) => {
        const isOn = currentRow + 1 === rowIdx ? "on" : "off";
        const rowData = { type: calenderType, on: isOn, idx: rowIdx };

        return (
          <DateRow
            row={row}
            rowIdx={rowIdx}
            onPress={onPress}
            monthMap={monthMap}
            selectedDate={selectedDate}
            rowData={rowData}
          />
        );
      })}
    </>
  );
}
