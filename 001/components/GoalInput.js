import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import Footer from "./Footer";
import Image from "./GoalInput/Image";

export default function GoalInput(props) {
  const { addGoalHandler, visible, onModalToggle } = props;
  const [enteredText, setEnteredText] = useState("");

  /** Goal입력 핸들러 */
  const inputGoalHandler = (enteredText) => {
    setEnteredText(enteredText);
  };

  /** 새 Goal추가 */
  const onAddGoal = (text) => {
    if (enteredText === "") {
      alert("글을 입력해주세요😮");
      return;
    }

    addGoalHandler(text);
    setEnteredText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.inputContainer}>
          <Image />

          <TextInput
            style={styles.textInput}
            placeholder="글을 입력하세요!"
            onChangeText={inputGoalHandler}
            value={enteredText}
            autoFocus={true}
          />

          <View>
            <View style={styles.button}>
              <Button
                title=" 게시글 작성 😎 "
                color={"#3D8361"}
                onPress={() => onAddGoal(enteredText)}
              />
            </View>
            <View style={styles.button}>
              <Button title="닫기" color={"#80827b"} onPress={onModalToggle} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    paddingHorizontal: 32,

    flex: 1,
    flexDirection: "column",
    justifyContent: "center",

    backgroundColor: "#EEF2E6",
    shadowColor: "#3D8361",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 40,
  },
  textInput: {
    paddingVertical: 8,
    paddingHorizontaal: 16,
    marginVertical: 8,
    borderRadius: 8,

    textAlign: "center",

    backgroundColor: "#fff",
    shadowColor: "#3D8361",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  button: {
    marginTop: 10,
  },
  footer: {
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
  },
});
