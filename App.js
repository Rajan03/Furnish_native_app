import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { OAuthScreeen } from "./src/screens";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <OAuthScreeen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
  },
});
