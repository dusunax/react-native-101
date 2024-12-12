import { View, StyleSheet, Text, Image, FlatList } from "react-native";
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
  guessRounds: number[];
  userNumber: number;
  onRestart: () => void;
}) {
  return (
    <Card>
      <Title>게임 종료</Title>
      <View style={styles.summaryContainer}>
        <Image
          style={styles.image}
          source={require("@/assets/images/star.png")}
        />
        <SubText style={styles.summaryText}>
          당신이 입력한 숫자는{" "}
          <Text style={styles.highlight}>{userNumber}</Text> 입니다.
        </SubText>
        <SubText style={styles.summaryText}>
          총 <Text style={styles.highlight}>{guessRounds.length}</Text> 번만에
          숫자를 찾아냈습니다.
        </SubText>
        <View style={styles.guessRoundContainer}>
          <FlatList
            data={guessRounds}
            renderItem={({ item, index }) => (
              <SubText style={styles.guessRound}>
                {index + 1}번째 예상 숫자:{" "}
                <Text style={styles.highlight}>{item}</Text>
              </SubText>
            )}
            keyExtractor={(item) => item.toString()}
          />
        </View>
      </View>
      <PrimaryButton onPress={onRestart}>다시 시작하기</PrimaryButton>
    </Card>
  );
}

const styles = StyleSheet.create({
  summaryContainer: {
    width: "100%",
    display: "flex",
    alignItems:'center',
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
  image: {
    width: 60,
    height: 60,
    marginHorizontal: "auto",
    marginBottom: 24,
  },
  guessRoundContainer: {
    width: "100%",
    maxWidth: 200,
    maxHeight: 120,
    borderRadius: 10,
    paddingVertical: 6,
    marginTop: 8,
    backgroundColor: Colors.primary100,
  },
  guessRoundList: {
    paddingHorizontal: 12,
    gap: 2,
  },
  guessRound: {
    opacity: 0.8,
    fontSize: 10,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
