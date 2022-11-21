import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

import DayRow from "./DayRow";
import CalendarTitle from "./Title";
import Dates from "./Dates";
import { getDatesHandler, isMonthMap } from "../../utils/calendar";

export default function Calendar() {
  // 언어: eng, kor
  const [lang, setLang] = useState("eng");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(currentDate.getDate());

  const dates = getDatesHandler(currentDate, lang);
  let monthMap = isMonthMap(currentDate, dates);

  function datePressHandler(cell) {
    setSelectedDate(cell);
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

        <Dates
          dates={dates}
          selectedDate={selectedDate}
          onPress={datePressHandler}
          monthMap={monthMap}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  calenderRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  days: {
    flex: 1,
    minHeight: 30,

    justifyContent: "center",
    alignItems: "center",
  },
  dates: {
    flex: 1,
    minHeight: 50,

    justifyContent: "center",
    alignItems: "center",
  },
});
