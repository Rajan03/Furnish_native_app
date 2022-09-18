import { StyleSheet } from "react-native";

export const OAuthStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  illustration: {
    justifyContent: "center",
    alignItems: "center",
  },
  illustrationImage: {
    width: 450,
    height: 300,

    resizeMode: "contain",
  },

  textAndActions: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 30,
  },

  loginText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 30,
  },

  orSeprator: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  orSepratorLine: {
    width: 100,
    height: 1,
    backgroundColor: "lightgray",
  },
  orSepratorText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "lightgray",
    marginHorizontal: 10,
  },

  signUpText: {
    alignSelf: "stretch",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "light",
    color: "grey",
    marginTop: "auto",
    marginBottom: 20,
  },
  signUpAction: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
});
