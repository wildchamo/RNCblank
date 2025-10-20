import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola, Jose!</Text>
      <Text style={styles.container.dummyText}>Hola, Jose!</Text>
      <Text style={styles.dummyText}>Hola, Jose 2!</Text>
      <Button title="Click me" styles={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",

    dummyText: {
      margin: 150,
    },
  },
  button: {
    backgroundColor: "red",
    color: "white",
  },
  dummyText: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    margin: 15,
    borderWidth: 2,
    borderColor: "black",
    padding: 14,
  },
});
