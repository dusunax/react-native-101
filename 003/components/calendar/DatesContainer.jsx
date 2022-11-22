import { View } from "react-native";

import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import DateRow from "./DateRow";

import { getNestedDates } from "../../utils/calendar";
import { useEffect } from "react";

export default function DayRow({
  dates,
  selectedDate,
  onPress,
  onPan,
  monthMap,
  selectedRow,
  CType,
}) {
  const nestedDates = getNestedDates(dates);

  const maxRow = nestedDates.length - 1;

  // react-native-reanimated
  // x axis, 달력 내 pan event 핸들링
  const startX = useSharedValue(0);
  const offsetX = useSharedValue(0);
  const panning = useSharedValue(false);
  const moveTo = useSharedValue(null);
  const idxMove = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onStart((e) => {
      startX.value = e.x;
      panning.value = true;
    })
    .onUpdate((e) => {
      offsetX.value = e.x;
    })
    .onEnd(() => {
      panning.value = false;
    })
    .onFinalize(() => {
      if (Math.abs(offsetX.value - startX.value) > 80) {
        if (offsetX.value < startX.value) {
          moveTo.value = -1;
          idxMove.value -= 1;
        } else {
          moveTo.value = 1;
          idxMove.value += 1;
        }
      }
    });

  useEffect(() => {
    idxMove.value = 0;
  }, []);

  const rStyle = useAnimatedStyle(() => {
    let weekly = CType.value === "weekly";

    return {
      paddingBottom: 30,
      maxHeight: weekly ? 80 : 1000,
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={rStyle}>
        {nestedDates.map((row, rowIdx) => {
          return (
            <View key={rowIdx + "row"}>
              <DateRow
                row={row}
                rowIdx={rowIdx}
                idxMove={idxMove}
                maxRow={maxRow}
                onPress={onPress}
                onPan={onPan}
                monthMap={monthMap}
                selectedDate={selectedDate}
                selectedRow={selectedRow}
                CType={CType}
              />
            </View>
          );
        })}
      </Animated.View>
    </GestureDetector>
  );
}
