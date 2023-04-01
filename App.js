import { View, StyleSheet } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";

export default function App() {
  console.log('Started Project');
  return (
    <View style={styles.rootContainer}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer:{
    backgroundColor:'#ddb52f',
    flex:1
  }
})
