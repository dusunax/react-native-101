import { StyleSheet, Text, View } from "react-native";
import Card from "../components/ui/Card";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

export default function GameOverScreen({ turnCount, onRestart }) {
  return (
    <View style={styles.container}>
      <Card>
        <Title>GameOverScreen</Title>
        <Text>{turnCount} 번째에 맞췄습니다!</Text>
        <Text></Text>
        <PrimaryButton onPress={onRestart}>다시 하기</PrimaryButton>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
