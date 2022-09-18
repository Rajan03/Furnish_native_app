import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const OAuthBtn = ({ btnText, btnIcon, onPressCallback }) => {
  return (
    <>
      {/* OAuth Btn with Icon */}
      <TouchableHighlight
        activeOpacity={1}
        underlayColor="#f1f1f1"
        style={styles.btnContainer}
        onPress={onPressCallback}
      >
        <>
          <View style={styles.btnIcon}>{btnIcon}</View>
          <Text style={styles.btnText}>{btnText}</Text>
        </>
      </TouchableHighlight>
    </>
  );
};

export default OAuthBtn;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 300,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    marginTop: 20,
  },
  btnIcon: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
  },
});
