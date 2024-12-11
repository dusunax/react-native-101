import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "@/components/PrimaryButton";

export default function GamePlayScreen() {
  const [enterNumber, setEnterNumber] = useState("");

  const handleInputChange = (text: string) => {
    setEnterNumber(text);
    confirmInput();
  };

  const confirmInput = () => {
    if (isNaN(Number(enterNumber))) {
      Alert.alert("잘못된 숫자", "1부터 99까지의 유효한 숫자를 입력하세요.", [
        {
          text: "확인",
          style: "destructive",
          onPress: () => resetInput(),
        },
      ]);
      return;
    }
  };

  const resetInput = () => {
    setEnterNumber("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>숫자를 맞춰보세요</Text>
        <Text style={styles.text}>1부터 99까지의 숫자를 맞춰보세요.</Text>
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
      </View>
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
  card: {
    backgroundColor: "#FCFAEE",
    width: "100%",
    padding: 12,
    borderRadius: 16,
    elevation: 4,
    shadowColor: "#1A1A1D",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#384B70",
  },
  text: {
    fontSize: 10,
    color: "#507687",
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
    borderColor: "#507687",
    borderBottomWidth: 2,
    paddingBottom: 6,
    textAlign: "center",
    fontSize: 48,
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 24,
  },
});
