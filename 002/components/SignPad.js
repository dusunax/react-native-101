import { StyleSheet, View, Text, Button } from "react-native";

export default function SignPad(props) {
  const { setSigns, signs, modeToggle, nextSign } = props;

  let signStrings = ["+", "-", "x", "÷"];
  let signPads = [];

  for (let i = 0; i < signStrings.length; i++) {
    signPads.push(
      <View key={"sign" + i} style={styles.padSt}>
        <Button
          color={"#888"}
          onPress={() => signButtonClickHandler(signStrings[i])}
          title={signStrings[i]}
        />
      </View>
    );
  }

  function signButtonClickHandler(pressed) {
    if (modeToggle) nextSign(pressed);
    changeSign(pressed);

    console.log(signs, modeToggle);
  }

  function changeSign(pressed) {
    const resultArray = [...signs];

    const last = resultArray.pop();
    resultArray.push(pressed);

    setSigns(resultArray);
  }

  return <View style={styles.container}>{signPads.map((el) => el)}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "center",
  },
  padSt: {
    flex: 1,
    margin: 4,

    textAlign: "center",

    backgroundColor: "skyblue",
  },
});
