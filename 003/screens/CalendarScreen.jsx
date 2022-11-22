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
  const gesture = Gesture.Pan()
    .onStart((e) => {
      startY.value = e.y;
      scrolling.value = true;
    })
    .onUpdate((e, context) => {
      console.log(context);
      offsetY.value = e.y;
    })
    .onEnd((e) => {
      scrolling.value = false;
      console.log("end");
    })
    .onFinalize(() => {});

  const rStyle = useAnimatedStyle(() => {
    if (scrolling.value) return;
    let type = "monthly";

    // if (pan down)
    if (
      offsetY.value > startY.value &&
      Math.abs(offsetY.value - startY.value) > 100
    ) {
      type = "weekly";
    } else {
      type = "monthly";
    }

    return {
      backgroundColor: type === "monthly" ? "#fff" : "#ddd",
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, rStyle]}>
        <Calendar calenderType={calenderType} lang={lang} rStyle={rStyle} />
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
