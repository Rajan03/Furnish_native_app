import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const ActionBtn = ({ btnText, onPressCallback }) => {
  return (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor="#333"
      style={styles.btnBox}
      onPress={onPressCallback}
    >
      <Text style={styles.btnText}>{btnText}</Text>
    </TouchableHighlight>
  );
};

export default ActionBtn;

const styles = StyleSheet.create({
  // Shadowed Btn Container
  btnBox: {
    width: 300,
    height: 50,
    backgroundColor: "#222",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // Btn Text
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
