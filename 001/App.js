import { useState } from "react";
import { StyleSheet, FlatList, View, Button, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import Footer from "./components/Footer";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const toggleAddGoalHandler = () => {
    setModalVisible(!modalVisible);
  };

  /** Goal추가 핸들러 */
  const addGoalHandler = (text) => {
    setGoals((prev) => [{ id: Math.random().toString(), text }, ...prev]);
    toggleAddGoalHandler();
  };

  /** Goal삭제 핸들러 */
  const deleteGoalHandler = (id) => {
    setGoals((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.wrap}>
        <View style={styles.button}>
          <Button
            title="추가하기 😃"
            color="#3D8361"
            onPress={toggleAddGoalHandler}
          />
        </View>

        <View>
          <Text style={styles.infoText}>🤔 목록을 클릭하면 삭제됩니다 🤔</Text>
        </View>

        {modalVisible && (
          <GoalInput
            visible={modalVisible}
            addGoalHandler={addGoalHandler}
            onModalToggle={toggleAddGoalHandler}
          />
        )}

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 24,

    backgroundColor: "#EEF2E6",
  },
  goalsContainer: {
    flex: 1,
  },
  button: {
    marginTop: 8,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 10,
    textAlign: "center",
    marginBottom: 12,
  },
});
