import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleProp, View, ViewStyle } from "react-native";

export default function HomeButton({
  style,
}: {
  style?: StyleProp<ViewStyle>;
}) {
  const router = useRouter();

  const pressHandler = () => {
    router.push("/");
  };

  return (
    <View style={style}>
      <Pressable onPress={pressHandler}>
        <Entypo name="home" size={20} color="#fff" />
      </Pressable>
    </View>
  );
}
