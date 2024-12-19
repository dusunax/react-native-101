import { Text, View } from "react-native";

export default function MyPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222222",
      }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>MyPage</Text>
    </View>
  );
}
