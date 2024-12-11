import { View, StyleSheet, Text } from "react-native";
import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";
import SubText from "@/components/ui/SubText";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { Colors } from "@/constants/color";

export default function GameOverScreen({
  guessRounds,
  userNumber,
  onRestart,
}: {
  guessRounds: number;
  userNumber: number;
  onRestart: () => void;
}) {
  return (
    <Card>
      <Title>게임 종료</Title>
      <View style={styles.summaryContainer}>
        <SubText style={styles.summaryText}>
          입력한 숫자는 <Text style={styles.highlight}>{userNumber}</Text> 입니다.
        </SubText>
        <SubText style={styles.summaryText}>
          총 <Text style={styles.highlight}>{guessRounds}</Text> 라운드를
          진행했습니다.
        </SubText>
      </View>
      <PrimaryButton onPress={onRestart}>다시 시작하기</PrimaryButton>
    </Card>
  );
}

const styles = StyleSheet.create({
  summaryContainer: {
    marginVertical: 24,
  },
  summaryText: {
    textAlign: "center",
    marginBottom: 2,
  },
  highlight: {
    color: Colors.primary500,
    fontWeight: "bold",
  },
});
