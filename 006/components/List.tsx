import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

function List({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return <View style={[styles.unorderList, style]}>{children}</View>;
}

function ListItem({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[styles.listItem, style]}>{children}</Text>;
}

List.Item = ListItem;
export default List;

const styles = StyleSheet.create({
  unorderList: {
    flexDirection: "column",
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20,
    gap: 2,
  },
  listItem: {
    color: "#fff",
    fontSize: 16,
  },
});
