import { useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function NumPad(props) {
  const { setNums, nums, modeToggle, nextNumber } = props;
  let numPads = [];

  for (let i = 1; i <= 10; i++) {
    const num = (i + "").slice(-1)[0];

    numPads.push(
      <View key={i} style={styles.padSt}>
        <Button
          color={"#55d"}
          onPress={() => numButtonClickHandler(num)}
          title={num}
        />
      </View>
    );
  }

  function numButtonClickHandler(pressed) {
    if (!modeToggle) nextNumber(pressed);
    const last = nums.slice(-1)[0].length;

    if (last < 2) {
      addNumber(nums, pressed);
    } else {
      nextNumber(false);
      return alert("2자 이상 입력할 수 없습니다.");
    }
  }

  function addNumber(nums, pressed) {
    const resultArray = [...nums];

    const last = resultArray.pop();
    resultArray.push(last + pressed);

    setNums(resultArray);
  }

  return (
    <View style={styles.container}>
      {/* flatList inline? */}
      {numPads.map((el) => el)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginBottom: 8,

    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  padSt: {
    width: "25%",
    margin: 4,

    textAlign: "center",

    backgroundColor: "skyblue",
  },
});
