import { useState } from "react";
import { Alert, StyleSheet,  TextInput, View } from "react-native";
import PrimaryButton from "@/components/PrimaryButton";
import { router } from "expo-router";
import Title from "./Title";
import Card from "./Card";
import SubText from "./SubText";
import { Colors } from "@/constants/colors";

export default function UserInput() {
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
    router.push("/screens/game_play");
  };

  const resetInput = () => {
    setEnterNumber("");
  };

  return (
    <View style={styles.container}>
      <Card>
        <Title>숫자를 맞춰보세요</Title>
        <SubText>1부터 99까지의 숫자를 맞춰보세요.</SubText>
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
    </View>
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
