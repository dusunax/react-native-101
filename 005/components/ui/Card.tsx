import { Colors } from "@/constants/color";
import {
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  useWindowDimensions,
} from "react-native";

export default function Card({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const { height } = useWindowDimensions();

  const cardStyle = {
    width: height < 400 ? "80%" : "100%",
    maxWidth: 600,
    marginHorizontal: "auto",
  } as ViewStyle;

  return <View style={[styles.card, cardStyle, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.secondary,
    width: "100%",
    padding: 12,
    borderRadius: 16,
    elevation: 4,
    shadowColor: Colors.tertiary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
});
