import Card from "@/components/Card";
import CommonLayout from "@/components/CommonLayout";
import SubText from "@/components/SubText";
import Title from "@/components/Title";
import { Colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export default function GamePlay() {
  return (
    <CommonLayout>
      <Card>
        <Title>상대방 숫자</Title>
        <SubText>Higher or Lower?</SubText>
      </Card>
    </CommonLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  buttonsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  input: {
    width: 80,
    borderColor: Colors.primary400,
    borderBottomWidth: 2,
    paddingBottom: 6,
    textAlign: "center",
    fontSize: 48,
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 24,
  },
});
