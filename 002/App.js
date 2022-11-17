import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import Title from "./components/Title";
import CalcBoard from "./components/CalcBoard";
import NumPad from "./components/NumPad";
import SignPad from "./components/SignPad";
import TextAside from "./components/TextAside";

import { calcWithArray } from "./utils/calculator";

export default function App() {
  const [nums, setNums] = useState([""]);
  const [signs, setSigns] = useState([""]);
  const [expect, setExpect] = useState("99");

  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("🤔");
  const [count, setCount] = useState(0);

  const [answerMode, setAnswerMode] = useState(false);
  const [modeToggle, setModeToggle] = useState(true);

  const randExpect = () => {
    const expect = Math.floor(Math.random() * 100) + 1;
    setExpect(expect);
  };

  const resetStates = () => {
    setNums([""]);
    setSigns([""]);
    randExpect();

    setModeToggle(true);
  };

  const resetAnswerMode = () => {
    setAnswerMode(false);
    setAnswer("");
    setResult("🙂");
  };

  function nextNumber(pressed) {
    console.log("다음숫자");
    setModeToggle(true);

    setSigns((prev) => [...prev, ""]);
    setNums((prev) => [...prev, pressed]);

    if (signs.length >= 2 && nums.length >= 3) {
      setAnswerMode(true);
      setAnswer(
        `${nums[0]} ${signs[0]} ${nums[1]} ${signs[1]} ${
          nums.slice(-1) + pressed
        } = ${expect}?`
      );
      setResult("🤔");
    }
  }

  function nextSign(pressed) {
    console.log("다음기호");
    setModeToggle(false);

    setSigns((prev) => [...prev, pressed]);
    setNums((prev) => [...prev, ""]);
  }

  const answerButtonHandler = () => {
    const answerCalced = calcWithArray(nums, signs);
    setAnswer(
      `${nums[0]} ${signs[0]} ${nums[1]} ${signs[1]} ${nums[2]} = ${answerCalced}!`
    );

    console.log(answer, expect);
    if (answerCalced === +expect) {
      setResult("정답😎");
      setCount(count + 1);
      resetStates();
    } else {
      setResult("틀렸습니다😰");
      resetStates();
      setCount(0);
    }
  };

  const resetButtonHandler = () => {
    resetStates();
    resetAnswerMode();
    setCount(0);
  };

  useEffect(() => {
    randExpect();
  }, []);

  return (
    <View style={styles.container}>
      <Text>연속 정답 횟수: {count}</Text>
      <Title />
      <CalcBoard nums={nums} signs={signs} expect={expect} />

      <View style={styles.buttonPad}>
        <NumPad
          setNums={setNums}
          nums={nums}
          modeToggle={modeToggle}
          nextNumber={nextNumber}
        />
        <SignPad
          setSigns={setSigns}
          signs={signs}
          modeToggle={modeToggle}
          nextSign={nextSign}
          nextNumber={nextNumber}
        />
      </View>

      <View>
        <Text style={styles.answer}> {answer}</Text>
        <Text style={styles.result}> {result}</Text>
        {answerMode && (
          <>
            <View style={styles.button}>
              <Button
                color={"#222"}
                onPress={answerButtonHandler}
                title={"결과 확인하기"}
              />
            </View>
          </>
        )}
        <Button
          color={"#222"}
          onPress={resetButtonHandler}
          title={"스코어 초기화"}
        />
      </View>

      {/* <TextAside /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 24,

    backgroundColor: "#fff",
  },
  buttonPad: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 8,
    marginBottom: 16,

    backgroundColor: "#ddd",
  },
  answer: {
    fontSize: 36,
    textAlign: "center",
    margin: 8,
  },
  result: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    marginBottom: 8,
  },
});
