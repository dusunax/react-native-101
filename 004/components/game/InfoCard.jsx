import { StyleSheet, Text } from "react-native";

import Card from "../ui/Card";
import PText from "../ui/PText";

export default function InfoCard() {
  return (
    <Card>
      <PText>업다운 게임 해보셨나요?</PText>
      <PText>제가 맞춰보겠습니다.🕵️‍♂️</PText>
      <PText></PText>
      <PText>과연 몇 번째 턴에 숫자를 찾을 수 있을까요?</PText>
      <PText>(1부터 99까지 중에서 숫자를 정해주세요.😀)</PText>
    </Card>
  );
}

const styles = StyleSheet.create({
  p: {
    color: "#393E46",
  },
});
