import { useEffect, useState } from "react";
import { View, Pressable } from "react-native";

import CalendarTitle from "./Title";
import DayRow from "./DayRow";
import DatesContainer from "./DatesContainer";

import { getDatesHandler, isMonthMap } from "../../utils/calendar";

export default function Calendar() {
  // 언어: eng, kor
  const [lang, setLang] = useState("eng");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(currentDate.getDate());

  // mode => 0: monthly, 1: weekly
  const [calenderType, setCalendarType] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null);

  const dates = getDatesHandler(currentDate, lang);
  let monthMap = isMonthMap(currentDate, dates);

  function datePressHandler(cell, rowIdx) {
    setSelectedDate(cell);
    onSwitchMode(rowIdx - 1);
  }

  function monthChangeHandler(go) {
    if (go === "prev") {
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
      );
    } else if (go === "next") {
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
      );
    }
  }

  const onSwitchMode = (rowIdx) => {
    if (calenderType === 1) {
      setRowSelect(rowIdx);
    }
  };

  const setRowSelect = (rowIdx) => {
    setSelectedRow(rowIdx);
  };

  useEffect(() => {
    setSelectedDate(1);
  }, []);

  return (
    <View>
      {/* month랑 year 전달 */}
      <CalendarTitle
        lang={lang}
        currentDate={currentDate}
        onPress={monthChangeHandler}
      />

      <Pressable>
        <DayRow lang={lang} />

        <DatesContainer
          dates={dates}
          selectedDate={selectedDate}
          onPress={datePressHandler}
          monthMap={monthMap}
          calenderType={calenderType}
          selectedRow={selectedRow}
        />
      </Pressable>
    </View>
  );
}
