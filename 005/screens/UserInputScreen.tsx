import { useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import SubText from "../components/ui/SubText";
import { Colors } from "../constants/color";

export default function UserInputCard({
  gameStartHandler: setUserNumber,
}: {
  gameStartHandler: (number: number) => void;
}) {
  const [enterNumber, setEnterNumber] = useState("");

  const checkValidNumber = (text: string) => {
    if (isNaN(Number(text))) {
      Alert.alert("잘못된 숫자", "1부터 99까지의 유효한 숫자를 입력하세요.", [
        {
          text: "확인",
          style: "destructive",
          onPress: () => resetInput(),
        },
      ]);
      return false;
    }
    return true;
  };

  const handleInputChange = (text: string) => {
    setEnterNumber(text);
    checkValidNumber(text);
  };

  const confirmInput = () => {
    if (!checkValidNumber(enterNumber)) return;
    setUserNumber(Number(enterNumber));
  };

  const resetInput = () => {
    setEnterNumber("");
  };

  return (
    <Card>
      <Title>숫자를 맞춰볼게요</Title>
      <SubText>1부터 99까지의 숫자를 입력하세요.</SubText>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleInputChange}
        value={enterNumber.toString()}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInput}>초기화</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInput}>시작</PrimaryButton>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
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
