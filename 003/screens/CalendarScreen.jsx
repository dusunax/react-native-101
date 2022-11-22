import { useState } from "react";
import { StyleSheet } from "react-native";

import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import Calendar from "../components/calendar/Calendar";

export default function CalendarScreen({ lang }) {
  // mode는? 0: monthly, 1: weekly
  const [calenderType, setCalendarType] = useState(0);

  const startY = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const scrolling = useSharedValue(false);
  const CType = useSharedValue("monthly");
  const gesture = Gesture.Pan()
    .onStart((e) => {
      startY.value = e.y;
      scrolling.value = true;
    })
    .onUpdate((e) => {
      offsetY.value = e.y;
    })
    .onEnd(() => {
      scrolling.value = false;
    })
    .onFinalize(() => {
      // if (pan down)
      if (
        offsetY.value < startY.value &&
        Math.abs(offsetY.value - startY.value) > 20
      ) {
        CType.value = "weekly";
      } else {
        CType.value = "monthly";
      }
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container]}>
        <Calendar calenderType={calenderType} lang={lang} CType={CType} />
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,

    flex: 1,
  },
});
